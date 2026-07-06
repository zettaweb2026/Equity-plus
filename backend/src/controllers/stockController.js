const stockService = require('../services/stockService');

const defaultSymbols = [
  // MAIN INDEXES
  '^NSEI',         // NIFTY 50
  '^NIFTYJR',       // NIFTY NEXT 50
  '^CNX100',       // NIFTY 100
  '^CNX200',       // NIFTY 200
  '^CRSLDX',       // NIFTY 500
  '^NSEMDCP50',    // NIFTY MIDCAP 50
  '^CNXMID',       // NIFTY MIDCAP 100
  '^CNXSC',        // NIFTY SMALLCAP 100
  '^NSEBANK',      // BANK NIFTY
  '^CNXFIN',       // FIN NIFTY
  '^BSESN',        // BSE SENSEX

  // SECTOR INDEXES
  '^CNXPSUBANK',   // NIFTY PSU BANK
  'NIFTYPVTBANK.NS',// NIFTY PRIVATE BANK
  '^CNXIT',        // NIFTY IT
  '^CNXAUTO',      // NIFTY AUTO
  '^CNXPHARMA',    // NIFTY PHARMA
  'HEALTHADD.NS',  // NIFTY HEALTHCARE
  '^CNXFMCG',      // NIFTY FMCG
  '^CNXCONDUR',    // NIFTY CONSUMER DURABLES
  '^CNXMETAL',     // NIFTY METAL
  '^CNXREALTY',    // NIFTY REALTY
  '^CNXENERGY',    // NIFTY ENERGY
  '^CNXOIL',       // NIFTY OIL & GAS
  '^CNXMEDIA',     // NIFTY MEDIA
  '^CNXINFRA',     // NIFTY INFRA

  // BANKING & FINANCE
  'HDFCBANK.NS',
  'ICICIBANK.NS',
  'SBIN.NS',
  'AXISBANK.NS',
  'KOTAKBANK.NS',
  'BANKBARODA.NS',
  'PNB.NS',
  'FEDERALBANK.NS',
  'IDFCFIRSTB.NS',
  'INDUSINDB.NS',

  // NBFC
  'BAJFINANCE.NS',
  'BAJAJFINSV.NS',
  'JIOFIN.NS',
  'SHRIRAMFIN.NS',
  'MUTHOOTFIN.NS',

  // IT COMPANIES
  'TCS.NS',
  'INFY.NS',
  'HCLTECH.NS',
  'WIPRO.NS',
  'TECHM.NS',
  'LTIM.NS',
  'PERSISTENT.NS',
  'COFORGE.NS',
  'MPHASIS.NS',

  // ENERGY
  'RELIANCE.NS',
  'ONGC.NS',
  'IOC.NS',
  'BPCL.NS',
  'HPCL.NS',
  'NTPC.NS',
  'POWERGRID.NS',
  'TATAPOWER.NS',
  'ADANIGREEN.NS',
  'ADANIPOWER.NS',

  // AUTOMOBILE
  'TATAMOTORS.NS',
  'M&M.NS',
  'MARUTI.NS',
  'HYUNDAI.NS',
  'BAJAJ-AUTO.NS',
  'HEROMOTOCO.NS',
  'TVSMOTOR.NS',
  'EICHERMOT.NS',
  'ASHOKLEY.NS',

  // FMCG
  'HINDUNILVR.NS',
  'ITC.NS',
  'NESTLEIND.NS',
  'BRITANNIA.NS',
  'DABUR.NS',
  'MARICO.NS',
  'GODREJCP.NS',

  // PHARMA
  'SUNPHARMA.NS',
  'DRREDDY.NS',
  'CIPLA.NS',
  'DIVISLAB.NS',
  'LUPIN.NS',
  'APOLLOHOSP.NS',

  // STEEL & METAL
  'TATASTEEL.NS',
  'JSWSTEEL.NS',
  'HINDALCO.NS',
  'VEDL.NS',
  'NMDC.NS',
  'COALINDIA.NS',

  // TELECOM
  'BHARTIARTL.NS',
  'IDEA.NS',
  'INDUSTOWER.NS',

  // CEMENT
  'ULTRACEMCO.NS',
  'AMBUJACEM.NS',
  'ACC.NS',
  'SHREECEM.NS',

  // REAL ESTATE
  'DLF.NS',
  'GODREJPROP.NS',
  'OBEROIRLTY.NS',
  'PRESTIGE.NS',

  // RETAIL
  'DMART.NS',
  'TRENT.NS',
  'ZOMATO.NS',
  'NYKAA.NS',

  // DEFENCE
  'HAL.NS',
  'BEL.NS',
  'BDL.NS',
  'MAZDOCK.NS',
  'COCHINSHIP.NS',

  // RAILWAY
  'IRCTC.NS',
  'IRFC.NS',
  'RVNL.NS',
  'RAILTEL.NS',
  'BEML.NS',

  // ADANI GROUP
  'ADANIENT.NS',
  'ADANIPORTS.NS',
  'ADANIENSOL.NS',
  'ATGL.NS',

  // TATA GROUP specific deduplicated
  'TITAN.NS',
  'TATACONSUM.NS'
];

const getMarketStatus = () => {
  const now = new Date();
  const options = { timeZone: 'Asia/Kolkata', hour12: false, weekday: 'short', hour: '2-digit', minute: '2-digit' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(now);
  
  let weekday = '';
  let hour = 0;
  let minute = 0;
  
  parts.forEach(part => {
    if (part.type === 'weekday') weekday = part.value;
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  });

  const timeMinutes = hour * 60 + minute;

  // Weekend check
  if (weekday === 'Sat' || weekday === 'Sun') {
    return 'Market Closed';
  }

  // Pre-market: 9:00 AM to 9:15 AM
  if (timeMinutes >= 540 && timeMinutes < 555) {
    return 'Pre Market';
  }

  // Market open: 9:15 AM to 3:30 PM
  if (timeMinutes >= 555 && timeMinutes <= 930) {
    return 'Market Open';
  }

  // Post-market: 3:30 PM to 4:00 PM
  if (timeMinutes > 930 && timeMinutes <= 960) {
    return 'Post Market';
  }

  return 'Market Closed';
};

const getTickerData = async (req, res) => {
  try {
    let symbols = defaultSymbols;
    
    if (req.query.symbols) {
      symbols = req.query.symbols
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    }
    
    if (symbols.length === 0) {
      return res.status(400).json({ error: 'No valid symbols provided' });
    }

    const tickerData = await stockService.getStocksTicker(symbols);
    const marketStatus = getMarketStatus();
    
    res.json({
      marketStatus,
      data: tickerData
    });
  } catch (error) {
    console.error('Controller error fetching stock ticker:', error);
    res.status(500).json({ error: 'Failed to retrieve stock ticker data' });
  }
};

module.exports = {
  getTickerData
};
