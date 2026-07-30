import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import { apiUrl } from "../config/api";

const Ticker = ({ className = "", variant = "default" }) => {
  const [stocks, setStocks] = useState([]);
  const [marketStatus, setMarketStatus] = useState("Market Closed");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Touch-hold pause: lets mobile/tablet users hold to freeze the ticker
  const [isPaused, setIsPaused] = useState(false);

  const fetchTickerData = async () => {
    try {
      const response = await fetch(apiUrl("/api/stocks/ticker"));
      if (!response.ok) {
        throw new Error("Failed to fetch market data");
      }
      const result = await response.json();
      
      // Filter out any stocks that had API errors or returned null values
      const validStocks = (result.data || []).filter(
        stock => !stock.error && stock.price !== null
      );
      
      setStocks(validStocks);
      setMarketStatus(result.marketStatus || "Market Closed");
      setError(null);
    } catch (err) {
      console.error("Error fetching stock data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTickerData();
    const interval = setInterval(fetchTickerData, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price, currency, symbol) => {
    if (price === null || price === undefined) return "N/A";
    const isINR = currency === "INR" || symbol.endsWith(".NS") || !symbol.startsWith("^");
    if (isINR) {
      const rounded = Math.round(price * 100) / 100;
      const parts = rounded.toFixed(2).split(".");
      let lastThree = parts[0].substring(parts[0].length - 3);
      const otherNumbers = parts[0].substring(0, parts[0].length - 3);
      if (otherNumbers !== "") {
        lastThree = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
      }
      return `₹${lastThree}.${parts[1]}`;
    }
    return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatVolume = (vol) => {
    if (vol === null || vol === undefined || vol === 0) return "N/A";
    if (vol >= 10000000) return (vol / 10000000).toFixed(1) + " Cr";
    if (vol >= 100000) return (vol / 100000).toFixed(1) + " L";
    if (vol >= 1000) return (vol / 1000).toFixed(1) + " K";
    return vol.toLocaleString("en-IN");
  };

  const cleanSymbol = (sym) => {
    if (sym.startsWith("^")) {
      return sym.substring(1).replace("NSEI", "NIFTY").replace("BSESN", "SENSEX");
    }
    return sym.replace(".NS", "");
  };

  const cleanName = (name) => {
    // Show up to 28 chars so company names are fully readable
    if (name.length > 28) {
      return name.substring(0, 26) + "..";
    }
    return name;
  };

  // Helper to determine status badge styling
  const getStatusBadgeStyle = () => {
    switch (marketStatus) {
      case "Market Open":
        return "from-emerald-600 to-teal-600 text-white";
      case "Pre Market":
        return "from-amber-500 to-orange-500 text-white";
      case "Post Market":
        return "from-indigo-600 to-violet-600 text-white";
      default:
        return "from-slate-600 to-slate-700 text-slate-100";
    }
  };

  if (loading) {
    if (variant === "floating") return null;
    return (
      <div className={`flex h-16 w-full items-center justify-center border-b border-slate-800 bg-slate-900 px-4 text-sm font-bold tracking-wider text-slate-400 select-none shadow-md ${className}`}>
        <RefreshCw className="mr-2 h-4 w-4 animate-spin text-teal-400" />
        LOADING INDIAN MARKET TICKER...
      </div>
    );
  }

  if (error && stocks.length === 0) {
    if (variant === "floating") return null;
    return (
      <div className={`flex h-16 w-full items-center justify-center border-b border-slate-800 bg-slate-900 px-4 text-sm font-bold tracking-wider text-rose-500 select-none shadow-md ${className}`}>
        ⚠️ TICKER OFFLINE: {error}
      </div>
    );
  }

  if (variant === "floating") {
    return (
      <div className={`ticker-floating-pill inline-flex items-center gap-5 px-8 py-3 rounded-full bg-[#090B12]/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 text-slate-100 select-none overflow-hidden w-full max-w-5xl pointer-events-auto transition-all ${className}`}>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          <span>LIVE MARKET</span>
        </div>

        <div className="ticker-track relative flex flex-1 overflow-hidden">
          <div className="animate-marquee flex items-center">
            {[...stocks, ...stocks].map((stock, idx) => {
              const isPositive = stock.change >= 0;
              const formattedPrice = formatPrice(stock.price, stock.currency, stock.symbol);
              return (
                <div key={`float-${stock.symbol}-${idx}`} className="mx-6 flex items-center gap-2.5 whitespace-nowrap text-xs font-bold">
                  <span className="text-slate-400 font-extrabold">{cleanSymbol(stock.symbol)}</span>
                  <span className="text-slate-100 font-black">{formattedPrice}</span>
                  <span className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-black ${isPositive ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"}`}>
                    {isPositive ? "▲" : "▼"} {Math.abs(stock.change).toFixed(2)} ({isPositive ? "+" : ""}{stock.changePercent}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex h-16 w-full items-center border-b border-slate-800 bg-slate-900 text-slate-100 select-none shadow-md overflow-hidden ${className}`}>
      {/* Dynamic Status Badge */}
      <div className={`z-50 flex h-full items-center gap-2 bg-gradient-to-r px-5 text-xs font-black tracking-widest uppercase shadow-xl ${getStatusBadgeStyle()}`}>
        {marketStatus === "Market Open" && (
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          </span>
        )}
        {marketStatus}
      </div>

      {/* Scrolling Track — hover pauses on desktop, touch-hold pauses on mobile */}
      <div
        className="ticker-track relative flex flex-1 overflow-hidden"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onTouchCancel={() => setIsPaused(false)}
      >
        <div className={`animate-marquee flex items-center py-2.5${isPaused ? " ticker-paused" : ""}`}>
          {/* Loop double lists for infinite scroll visual seamlessness */}
          {[...stocks, ...stocks].map((stock, idx) => {
            const isPositive = stock.change >= 0;
            const formattedPrice = formatPrice(stock.price, stock.currency, stock.symbol);
            const absoluteChange = Math.abs(stock.change).toFixed(2);
            
            return (
              <div
                key={`${stock.symbol}-${idx}`}
                className="mx-10 flex items-center gap-4 whitespace-nowrap text-sm font-bold border-r border-slate-700/60 pr-10"
              >
                {/* Symbol/Index Label */}
                <span className={stock.isIndex ? "text-indigo-400 font-extrabold" : "text-slate-400"}>
                  {cleanSymbol(stock.symbol)}
                </span>
                
                {/* Full name */}
                <span className="text-slate-200">{cleanName(stock.name)}</span>
                
                {/* Current Price */}
                <span className="font-extrabold text-slate-100">{formattedPrice}</span>
                
                {/* Profit/Loss movement badge */}
                <span
                  className={`flex items-center gap-1 rounded px-2 py-0.5 font-extrabold text-xs transition-colors duration-300 ${
                    isPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                  }`}
                >
                  <span className="mr-0.5 text-xs font-black">{isPositive ? "▲" : "▼"}</span>
                  <span>{absoluteChange}</span>
                  <span className="ml-1 text-xs font-semibold opacity-95">
                    ({isPositive ? "+" : ""}{stock.changePercent}%)
                  </span>
                </span>

                {/* Trading Volume (only for actual stocks) */}
                {!stock.isIndex && stock.volume > 0 && (
                  <span className="text-xs text-slate-500 font-medium">
                    Vol: {formatVolume(stock.volume)}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
