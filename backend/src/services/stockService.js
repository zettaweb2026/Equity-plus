const nameOverrides = {
  // Main Indexes
  '^NSEI': 'NIFTY 50',
  '^NIFTYJR': 'NIFTY NEXT 50',
  '^CNX100': 'NIFTY 100',
  '^CNX200': 'NIFTY 200',
  '^CRSLDX': 'NIFTY 500',
  '^NSEMDCP50': 'NIFTY MID 50',
  '^CNXMID': 'NIFTY MID 100',
  '^CNXSC': 'NIFTY SMALL 100',
  '^NSEBANK': 'BANK NIFTY',
  '^CNXFIN': 'FIN NIFTY',
  '^BSESN': 'BSE SENSEX',
  
  // Sector Indexes
  '^CNXPSUBANK': 'NIFTY PSU BANK',
  'NIFTYPVTBANK.NS': 'NIFTY PVT BANK',
  '^CNXIT': 'NIFTY IT',
  '^CNXAUTO': 'NIFTY AUTO',
  '^CNXPHARMA': 'NIFTY PHARMA',
  'HEALTHADD.NS': 'NIFTY HLTHCARE',
  '^CNXFMCG': 'NIFTY FMCG',
  '^CNXCONDUR': 'NIFTY CON DUR',
  '^CNXMETAL': 'NIFTY METAL',
  '^CNXREALTY': 'NIFTY REALTY',
  '^CNXENERGY': 'NIFTY ENERGY',
  '^CNXOIL': 'NIFTY OIL & GAS',
  '^CNXMEDIA': 'NIFTY MEDIA',
  '^CNXINFRA': 'NIFTY INFRA',

  // Banking & Finance
  'HDFCBANK.NS': 'HDFC BANK',
  'ICICIBANK.NS': 'ICICI BANK',
  'SBIN.NS': 'SBI',
  'AXISBANK.NS': 'AXIS BANK',
  'KOTAKBANK.NS': 'KOTAK MAHINDRA',
  'BANKBARODA.NS': 'BANK OF BARODA',
  'PNB.NS': 'PNB',
  'FEDERALBANK.NS': 'FEDERAL BANK',
  'IDFCFIRSTB.NS': 'IDFC FIRST BANK',
  'INDUSINDB.NS': 'INDUSIND BANK',

  // NBFC
  'BAJFINANCE.NS': 'BAJAJ FINANCE',
  'BAJAJFINSV.NS': 'BAJAJ FINSERV',
  'JIOFIN.NS': 'JIO FIN SERVICES',
  'SHRIRAMFIN.NS': 'SHRIRAM FINANCE',
  'MUTHOOTFIN.NS': 'MUTHOOT FINANCE',

  // IT
  'TCS.NS': 'TCS',
  'INFY.NS': 'INFOSYS',
  'HCLTECH.NS': 'HCL TECH',
  'WIPRO.NS': 'WIPRO',
  'TECHM.NS': 'TECH MAHINDRA',
  'LTIM.NS': 'LTIMINDTREE',
  'PERSISTENT.NS': 'PERSISTENT',
  'COFORGE.NS': 'COFORGE',
  'MPHASIS.NS': 'MPHASIS',

  // Energy
  'RELIANCE.NS': 'RELIANCE',
  'ONGC.NS': 'ONGC',
  'IOC.NS': 'INDIAN OIL',
  'BPCL.NS': 'BPCL',
  'HPCL.NS': 'HPCL',
  'NTPC.NS': 'NTPC',
  'POWERGRID.NS': 'POWER GRID',
  'TATAPOWER.NS': 'TATA POWER',
  'ADANIGREEN.NS': 'ADANI GREEN',
  'ADANIPOWER.NS': 'ADANI POWER',

  // Automobile
  'TATAMOTORS.NS': 'TATA MOTORS',
  'M&M.NS': 'M&M',
  'MARUTI.NS': 'MARUTI SUZUKI',
  'HYUNDAI.NS': 'HYUNDAI MOTOR',
  'BAJAJ-AUTO.NS': 'BAJAJ AUTO',
  'HEROMOTOCO.NS': 'HERO MOTOCORP',
  'TVSMOTOR.NS': 'TVS MOTORS',
  'EICHERMOT.NS': 'EICHER MOTORS',
  'ASHOKLEY.NS': 'ASHOK LEYLAND',

  // FMCG
  'HINDUNILVR.NS': 'HIND UNILEVER',
  'ITC.NS': 'ITC',
  'NESTLEIND.NS': 'NESTLE INDIA',
  'BRITANNIA.NS': 'BRITANNIA',
  'DABUR.NS': 'DABUR',
  'MARICO.NS': 'MARICO',
  'GODREJCP.NS': 'GODREJ CONSUMER',

  // Pharma
  'SUNPHARMA.NS': 'SUN PHARMA',
  'DRREDDY.NS': 'DR REDDY LABS',
  'CIPLA.NS': 'CIPLA',
  'DIVISLAB.NS': 'DIVIS LABS',
  'LUPIN.NS': 'LUPIN',
  'APOLLOHOSP.NS': 'APOLLO HOSPITALS',

  // Steel & Metal
  'TATASTEEL.NS': 'TATA STEEL',
  'JSWSTEEL.NS': 'JSW STEEL',
  'HINDALCO.NS': 'HINDALCO',
  'VEDL.NS': 'VEDANTA',
  'NMDC.NS': 'NMDC',
  'COALINDIA.NS': 'COAL INDIA',

  // Telecom
  'BHARTIARTL.NS': 'BHARTI AIRTEL',
  'IDEA.NS': 'VODAFONE IDEA',
  'INDUSTOWER.NS': 'INDUS TOWERS',

  // Cement
  'ULTRACEMCO.NS': 'ULTRATECH CEMENT',
  'AMBUJACEM.NS': 'AMBUJA CEMENT',
  'ACC.NS': 'ACC',
  'SHREECEM.NS': 'SHREE CEMENT',

  // Real Estate
  'DLF.NS': 'DLF',
  'GODREJPROP.NS': 'GODREJ PROP',
  'OBEROIRLTY.NS': 'OBEROI REALTY',
  'PRESTIGE.NS': 'PRESTIGE ESTATES',

  // Retail
  'DMART.NS': 'DMART',
  'TRENT.NS': 'TRENT',
  'ZOMATO.NS': 'ZOMATO',
  'NYKAA.NS': 'NYKAA',

  // Defence
  'HAL.NS': 'HAL',
  'BEL.NS': 'BEL',
  'BDL.NS': 'BHARAT DYNAMICS',
  'MAZDOCK.NS': 'MAZAGON DOCK',
  'COCHINSHIP.NS': 'COCHIN SHIPYARD',

  // Railway
  'IRCTC.NS': 'IRCTC',
  'IRFC.NS': 'IRFC',
  'RVNL.NS': 'RVNL',
  'RAILTEL.NS': 'RAILTEL',
  'BEML.NS': 'BEML',

  // Adani Group
  'ADANIENT.NS': 'ADANI ENT',
  'ADANIPORTS.NS': 'ADANI PORTS',
  'ADANIENSOL.NS': 'ADANI ENERGY SOL',
  'ATGL.NS': 'ADANI TOTAL GAS',

  // Tata Group specific
  'TITAN.NS': 'TITAN',
  'TATACONSUM.NS': 'TATA CONSUMER'
};

const cache = new Map();
const CACHE_TTL = 120000; // 2 minutes caching to avoid Yahoo Finance rate limits
let updatePromise = null;

const fetchStockData = async (symbol) => {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=1d`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (!data.chart || !data.chart.result || data.chart.result.length === 0) {
      throw new Error('Invalid response from data provider');
    }

    const result = data.chart.result[0];
    const meta = result.meta;

    const currentPrice = meta.regularMarketPrice;
    const prevClose = meta.chartPreviousClose || meta.previousClose;
    
    if (currentPrice === undefined || prevClose === undefined) {
      throw new Error('Price details missing in metadata');
    }

    const changeValue = currentPrice - prevClose;
    const changePercent = (changeValue / prevClose) * 100;
    
    let volume = meta.regularMarketVolume || 0;
    if (!volume && result.indicators && result.indicators.quote && result.indicators.quote[0].volume) {
      const volArray = result.indicators.quote[0].volume;
      for (let i = volArray.length - 1; i >= 0; i--) {
        if (volArray[i] !== null && volArray[i] !== undefined) {
          volume = volArray[i];
          break;
        }
      }
    }

    const isIndex = symbol.startsWith('^');

    return {
      symbol: symbol.toUpperCase(),
      name: nameOverrides[symbol] || meta.shortName || meta.longName || symbol.toUpperCase(),
      price: parseFloat(currentPrice.toFixed(2)),
      volume: parseInt(volume),
      change: parseFloat(changeValue.toFixed(2)),
      changePercent: parseFloat(changePercent.toFixed(2)),
      currency: meta.currency || 'INR',
      isIndex
    };
  } catch (error) {
    console.error(`Error fetching Indian market stock/index ${symbol}:`, error.message);
    
    // Check if we have previous successfully cached data for this symbol to return as fallback
    const cachedEntry = cache.get('tickerData');
    if (cachedEntry && cachedEntry.data) {
      const oldStock = cachedEntry.data.find(s => s.symbol === symbol.toUpperCase());
      if (oldStock) {
        return oldStock; // return previous valid data to prevent visual jank
      }
    }

    // Default fallback with calculated mock values if no previous cached data exists
    return {
      symbol: symbol.toUpperCase(),
      name: nameOverrides[symbol] || symbol.toUpperCase(),
      price: null,
      volume: null,
      change: null,
      changePercent: null,
      currency: 'INR',
      isIndex: symbol.startsWith('^'),
      error: error.message
    };
  }
};

// Batch fetch to reduce concurrent connections
// Smaller batch + longer delay avoids Yahoo Finance rate-limit 404s for valid symbols
const batchFetch = async (symbols, batchSize = 8) => {
  const results = [];
  for (let i = 0; i < symbols.length; i += batchSize) {
    const batch = symbols.slice(i, i + batchSize);
    const promises = batch.map(symbol => fetchStockData(symbol));
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    if (i + batchSize < symbols.length) {
      await new Promise(resolve => setTimeout(resolve, 400)); // 400ms between batches
    }
  }
  return results;
};

const getStocksTicker = async (symbols) => {
  const now = Date.now();
  const cacheEntry = cache.get('tickerData');

  if (cacheEntry && (now - cacheEntry.timestamp < CACHE_TTL)) {
    return cacheEntry.data;
  }

  if (updatePromise) {
    return updatePromise;
  }

  updatePromise = (async () => {
    try {
      const data = await batchFetch(symbols);
      cache.set('tickerData', {
        timestamp: Date.now(),
        data: data
      });
      return data;
    } catch (error) {
      console.error('Failed to update stock cache:', error);
      if (cacheEntry) return cacheEntry.data;
      throw error;
    } finally {
      updatePromise = null;
    }
  })();

  return updatePromise;
};

module.exports = {
  getStocksTicker,
  nameOverrides
};
