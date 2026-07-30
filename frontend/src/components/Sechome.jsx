import { useEffect, useState, useCallback } from "react";
import { TrendingUp, TrendingDown, RefreshCw, BarChart2, Zap, Award } from "lucide-react";
import { apiUrl } from "../config/api";
import { NavLink } from "react-router-dom";

const formatPrice = (val, currency) => {
  if (val === null || val === undefined) return "--";
  if (currency === "INR" || !currency) {
    return `₹${Number(val).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
  }
  return `$${Number(val).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
};

const Sechome = () => {
  const [tickerStocks, setTickerStocks] = useState([]);
  const [marketIndices, setMarketIndices] = useState(null);
  const [activeTab, setActiveTab] = useState("gainers");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllData = useCallback(async () => {
    try {
      const [tickerRes, marketRes] = await Promise.all([
        fetch(apiUrl("/api/stocks/ticker")),
        fetch(apiUrl("/api/market")),
      ]);

      if (tickerRes.ok) {
        const json = await tickerRes.json();
        const valid = (json.data || []).filter((s) => !s.error && s.price !== null);
        setTickerStocks(valid);
      }

      if (marketRes.ok) {
        const json = await marketRes.json();
        if (json.success) setMarketIndices(json.data);
      }
      setError(null);
    } catch (err) {
      console.error("Error fetching market pulse:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, 30000);
    return () => clearInterval(interval);
  }, [fetchAllData]);

  // Tab filtering logic
  const gainers = [...tickerStocks]
    .filter((s) => !s.isIndex && s.changePercent > 0)
    .sort((a, b) => b.changePercent - a.changePercent)
    .slice(0, 8);

  const losers = [...tickerStocks]
    .filter((s) => !s.isIndex && s.changePercent < 0)
    .sort((a, b) => a.changePercent - b.changePercent)
    .slice(0, 8);

  const active = [...tickerStocks]
    .filter((s) => !s.isIndex && s.volume > 0)
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 8);

  const getDisplayedStocks = () => {
    if (activeTab === "gainers") return gainers;
    if (activeTab === "losers") return losers;
    return active;
  };

  const displayedList = getDisplayedStocks();

  return (
    <div className="w-full bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Zap className="h-3.5 w-3.5" /> Live NSE/BSE Market Pulse
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
              Real-Time Stock Market Highlights
            </h2>
          </div>

          <button
            onClick={fetchAllData}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-800 hover:text-white transition"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-emerald-400 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh Live Quotes</span>
          </button>
        </div>

        {/* Top 4 Live Indices Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* NIFTY 50 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
              <span>NSE BENCHMARK</span>
              <span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">INDEX</span>
            </div>
            <div className="text-lg font-black text-white">NIFTY 50</div>
            <div className="text-2xl font-black text-white mt-1">
              {marketIndices?.NIFTY?.price ? formatPrice(marketIndices.NIFTY.price, "INR") : "24,250.20"}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg w-fit">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{marketIndices?.NIFTY?.percent ? `+${marketIndices.NIFTY.percent}%` : "+0.45% ▲"}</span>
            </div>
          </div>

          {/* BANK NIFTY */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
              <span>BANKING INDEX</span>
              <span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">INDEX</span>
            </div>
            <div className="text-lg font-black text-white">BANK NIFTY</div>
            <div className="text-2xl font-black text-white mt-1">
              {marketIndices?.BANK_NIFTY?.price ? formatPrice(marketIndices.BANK_NIFTY.price, "INR") : "52,205.90"}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg w-fit">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{marketIndices?.BANK_NIFTY?.percent ? `+${marketIndices.BANK_NIFTY.percent}%` : "+0.80% ▲"}</span>
            </div>
          </div>

          {/* GOLD */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
              <span>COMMODITY</span>
              <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">24K GOLD</span>
            </div>
            <div className="text-lg font-black text-white">GOLD (10g)</div>
            <div className="text-2xl font-black text-white mt-1">
              {marketIndices?.GOLD?.price ? formatPrice(marketIndices.GOLD.price, "INR") : "₹73,450.00"}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg w-fit">
              <Award className="h-3.5 w-3.5" />
              <span>Bullion Safe</span>
            </div>
          </div>

          {/* USD / INR */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
              <span>CURRENCY PAIR</span>
              <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">FOREX</span>
            </div>
            <div className="text-lg font-black text-white">USD / INR</div>
            <div className="text-2xl font-black text-white mt-1">
              {marketIndices?.USD_INR?.price ? `₹${marketIndices.USD_INR.price}` : "₹83.65"}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg w-fit">
              <BarChart2 className="h-3.5 w-3.5" />
              <span>Global Forex</span>
            </div>
          </div>

        </div>

        {/* Tabbed Stock Directory (Groww Style) */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Tabs header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("gainers")}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                  activeTab === "gainers"
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                🚀 Top Gainers
              </button>

              <button
                onClick={() => setActiveTab("losers")}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                  activeTab === "losers"
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                📉 Top Losers
              </button>

              <button
                onClick={() => setActiveTab("active")}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                  activeTab === "active"
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                ⚡ Most Active Volume
              </button>
            </div>

            <NavLink
              to="/services"
              className="text-xs font-extrabold text-emerald-400 hover:underline flex items-center gap-1"
            >
              View Full Stock Screener →
            </NavLink>
          </div>

          {/* Grid of Stock Cards */}
          {displayedList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {displayedList.map((stock) => {
                const isPositive = stock.changePercent >= 0;
                return (
                  <div
                    key={stock.symbol}
                    className="group rounded-2xl border border-slate-800/80 bg-slate-950 p-4 shadow-lg hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span className="font-mono font-bold text-indigo-400">{stock.symbol.replace(".NS", "")}</span>
                        <span className="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">NSE</span>
                      </div>
                      <div className="font-bold text-white text-sm line-clamp-1 group-hover:text-emerald-400 transition-colors">
                        {stock.name}
                      </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between border-t border-slate-900 pt-3">
                      <div>
                        <div className="text-xs text-slate-500 font-semibold">LTP Price</div>
                        <div className="text-base font-black text-white">
                          {formatPrice(stock.price, stock.currency)}
                        </div>
                      </div>

                      <div
                        className={`flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                          isPositive
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        }`}
                      >
                        {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        <span>{isPositive ? "+" : ""}{stock.changePercent}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-slate-400 text-sm font-semibold">
              Loading real-time NSE market updates...
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Sechome;
