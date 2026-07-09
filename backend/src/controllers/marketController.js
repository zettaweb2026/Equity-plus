const axios = require('axios');

// NSE endpoints (server-side requests with browser-like headers)
const NSE_BASE = 'https://www.nseindia.com';
const ALL_INDICES = `${NSE_BASE}/api/allIndices`;
const QUOTE_EQUITY = (symbol) => `${NSE_BASE}/api/quote-equity?symbol=${encodeURIComponent(symbol)}`;

// Stocks to show (change as needed)
const STOCK_SYMBOLS = ['RELIANCE', 'TCS', 'HDFCBANK', 'INFY'];

const headers = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
  Referer: 'https://www.nseindia.com/',
  Accept: 'application/json, text/plain, */*',
};

const safe = (v, def = null) => (v === undefined ? def : v);

const getMarket = async (req, res) => {
  try {
    // 1) hit the NSE homepage to receive cookies and reduce blocking
    const home = await axios.get(NSE_BASE, { headers, timeout: 10000 });
    const setCookies = home.headers?.['set-cookie'] || [];
    const cookieHeader = Array.isArray(setCookies) ? setCookies.map((c) => c.split(';')[0]).join('; ') : '';

    // 2) fetch all indices with cookie header
    const idxResp = await axios.get(ALL_INDICES, {
      headers: { ...headers, Cookie: cookieHeader },
      timeout: 10000,
    });
    const indices = idxResp.data?.data || idxResp.data || [];

    const data = {};
    // find NIFTY 50 and NIFTY BANK
    indices.forEach((it) => {
      const name = (it?.index || it?.name || '').toString().toLowerCase();
      if (name.includes('nifty 50') || name.includes('nifty')) {
        data['NIFTY'] = {
          symbol: '^NSEI',
          price: safe(it?.last),
          change: safe(it?.change),
          percent: safe(it?.pChange),
        };
      }
      if (name.includes('nifty bank') || name.includes('bank nifty')) {
        data['BANK_NIFTY'] = {
          symbol: '^NSEBANK',
          price: safe(it?.last),
          change: safe(it?.change),
          percent: safe(it?.pChange),
        };
      }
    });

    // 2) fetch each stock quote
    data['STOCKS'] = {};
    for (const s of STOCK_SYMBOLS) {
      try {
        const r = await axios.get(QUOTE_EQUITY(s), { headers: { ...headers, Cookie: cookieHeader }, timeout: 10000 });
        const payload = r.data || {};
        // Parse price from known paths
        const price = safe(payload?.priceInfo?.lastPrice) ?? safe(payload?.priceInfo?.lastUpdate) ?? null;
        const lastPrice =
          safe(payload?.priceInfo?.lastPrice) || safe(payload?.priceInfo?.close) || safe(payload?.priceInfo?.lastPrice);

        // many NSE endpoints nest data differently; try multiple fallbacks
        const parsedPrice =
          payload?.info?.lastPrice ?? payload?.priceInfo?.lastPrice ?? payload?.data?.lastPrice ?? lastPrice ?? null;

        data['STOCKS'][s] = {
          symbol: s,
          price: parsedPrice,
          change: payload?.priceInfo?.change ?? null,
          percent: payload?.priceInfo?.pChange ?? null,
          raw: payload,
        };
      } catch (err) {
        console.error('stock fetch err', s, err.message || err);
        data['STOCKS'][s] = { symbol: s, price: null, error: true };
      }
    }

    // 3) USD/INR - use a free FX endpoint (exchangerate.host)
    try {
      const fx = await axios.get('https://api.exchangerate.host/latest', { params: { base: 'USD', symbols: 'INR' }, timeout: 8000 });
      const rate = fx.data?.rates?.INR ?? null;
      data['USD_INR'] = { symbol: 'USD/INR', price: rate };
    } catch (e) {
      data['USD_INR'] = { symbol: 'USD/INR', price: null };
    }

    // 4) GOLD - try a free metals API via exchangerate.host (gold price per troy ounce not perfect)
    try {
      // exchangerate.host supports some commodities indirectly via /timeseries or other services; fallback to null if unavailable
      data['GOLD'] = { symbol: 'GOLD', price: null };
    } catch (e) {
      data['GOLD'] = { symbol: 'GOLD', price: null };
    }

    return res.json({ success: true, data });
  } catch (err) {
    console.error('market fetch error', err.message || err);
    if (err.response) {
      console.error('status', err.response.status);
      try {
        console.error('response data', JSON.stringify(err.response.data).slice(0, 2000));
      } catch (e) {
        console.error('response data unreadable');
      }
      return res.status(err.response.status).json({ success: false, error: err.response.data || err.message });
    }

    return res.status(500).json({ success: false, error: 'Failed to fetch market data' });
  }
};

module.exports = { getMarket };
