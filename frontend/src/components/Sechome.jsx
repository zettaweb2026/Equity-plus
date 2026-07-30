import { useEffect, useState, useCallback } from "react";
import { TrendingUp, TrendingDown, RefreshCw, BarChart2, Award } from "lucide-react";
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
    } catch (err) {
      console.error("Error fetching market pulse:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white tracking-tight">
              Track what's moving the market today
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
          <div className="group rounded-[1.5rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-500/10 hover:ring-emerald-500/30">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
              <span>NSE BENCHMARK</span>
              <span className="text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 shadow-sm">INDEX</span>
            </div>
            <div className="text-base font-extrabold text-slate-300 tracking-tight">NIFTY 50</div>
            <div className="text-3xl font-black text-white mt-1 tracking-tighter">
              {marketIndices?.NIFTY?.price ? formatPrice(marketIndices.NIFTY.price, "INR") : "24,250.20"}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-black tracking-wide text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg w-fit border border-emerald-500/20 shadow-inner">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{marketIndices?.NIFTY?.percent ? `+${marketIndices.NIFTY.percent}%` : "+0.45% ▲"}</span>
            </div>
          </div>

          {/* BANK NIFTY */}
          <div className="group rounded-[1.5rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-indigo-500/10 hover:ring-indigo-500/30">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
              <span>BANKING INDEX</span>
              <span className="text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 shadow-sm">INDEX</span>
            </div>
            <div className="text-base font-extrabold text-slate-300 tracking-tight">BANK NIFTY</div>
            <div className="text-3xl font-black text-white mt-1 tracking-tighter">
              {marketIndices?.BANK_NIFTY?.price ? formatPrice(marketIndices.BANK_NIFTY.price, "INR") : "52,205.90"}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-black tracking-wide text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg w-fit border border-emerald-500/20 shadow-inner">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{marketIndices?.BANK_NIFTY?.percent ? `+${marketIndices.BANK_NIFTY.percent}%` : "+0.80% ▲"}</span>
            </div>
          </div>

          {/* GOLD */}
          <div className="group rounded-[1.5rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-amber-500/10 hover:ring-amber-500/30">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
              <span>COMMODITY</span>
              <span className="text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 shadow-sm">24K GOLD</span>
            </div>
            <div className="text-base font-extrabold text-slate-300 tracking-tight">GOLD (10g)</div>
            <div className="text-3xl font-black text-white mt-1 tracking-tighter">
              {marketIndices?.GOLD?.price ? formatPrice(marketIndices.GOLD.price, "INR") : "₹73,450.00"}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-black tracking-wide text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg w-fit border border-amber-500/20 shadow-inner">
              <Award className="h-3.5 w-3.5" />
              <span>Bullion Safe</span>
            </div>
          </div>

          {/* USD / INR */}
          <div className="group rounded-[1.5rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-cyan-500/10 hover:ring-cyan-500/30">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
              <span>CURRENCY PAIR</span>
              <span className="text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 shadow-sm">FOREX</span>
            </div>
            <div className="text-base font-extrabold text-slate-300 tracking-tight">USD / INR</div>
            <div className="text-3xl font-black text-white mt-1 tracking-tighter">
              {marketIndices?.USD_INR?.price ? `₹${marketIndices.USD_INR.price}` : "₹83.65"}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-black tracking-wide text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg w-fit border border-cyan-500/20 shadow-inner">
              <BarChart2 className="h-3.5 w-3.5" />
              <span>Global Forex</span>
            </div>
          </div>

        </div>

        {/* Tabbed Stock Directory (Groww Style) */}
        <div className="rounded-[2rem] border border-white/5 bg-gradient-to-br from-[#111827] to-[#0a0f16] p-6 sm:p-10 shadow-2xl ring-1 ring-white/5">
          
          {/* Tabs header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab("gainers")}
                className={`px-6 py-3 rounded-xl text-sm font-black tracking-wide transition-all duration-300 ${
                  activeTab === "gainers"
                    ? "bg-white/10 text-white shadow-inner border border-white/10"
                    : "bg-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }`}
              >
                🚀 Top Gainers
              </button>

              <button
                onClick={() => setActiveTab("losers")}
                className={`px-6 py-3 rounded-xl text-sm font-black tracking-wide transition-all duration-300 ${
                  activeTab === "losers"
                    ? "bg-white/10 text-white shadow-inner border border-white/10"
                    : "bg-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }`}
              >
                📉 Top Losers
              </button>

              <button
                onClick={() => setActiveTab("active")}
                className={`px-6 py-3 rounded-xl text-sm font-black tracking-wide transition-all duration-300 ${
                  activeTab === "active"
                    ? "bg-white/10 text-white shadow-inner border border-white/10"
                    : "bg-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5"
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
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-lg hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute top-0 right-0 h-24 w-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none ${isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`} />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span className="font-mono font-bold text-indigo-400">{stock.symbol.replace(".NS", "")}</span>
                        <span className="text-[10px] font-black tracking-widest uppercase bg-black/40 px-2 py-0.5 rounded border border-white/5">NSE</span>
                      </div>
                      <div className="font-bold text-white text-sm line-clamp-1 group-hover:text-slate-200 transition-colors">
                        {stock.name}
                      </div>
                    </div>

                    <div className="relative z-10 mt-5 flex items-end justify-between border-t border-white/5 pt-4">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-500 mb-0.5 tracking-wider">LTP Price</div>
                        <div className="text-lg font-black text-white tracking-tight">
                          {formatPrice(stock.price, stock.currency)}
                        </div>
                      </div>

                      <div
                        className={`flex items-center gap-1.5 text-xs font-black tracking-wide px-2.5 py-1.5 rounded-lg border shadow-inner ${
                          isPositive
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border-rose-500/20"
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
