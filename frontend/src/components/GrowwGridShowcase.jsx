import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const fundData = [
  {
    id: "hybrid",
    name: "India Hybrid Fund",
    category: "Medium risk • Hybrid • Large Cap",
    returns: "16.32%",
    period: "3Y annualised",
    todayChange: "+0.55%",
    points: [40, 42, 39, 45, 48, 46, 52, 58, 55, 62, 68, 65, 74, 80, 85],
  },
  {
    id: "flexicap",
    name: "Flexi Cap Equity Fund",
    category: "High risk • Equity • Multi Cap",
    returns: "21.45%",
    period: "3Y annualised",
    todayChange: "+1.20%",
    points: [35, 38, 41, 40, 47, 53, 50, 59, 64, 62, 70, 78, 83, 89, 94],
  },
  {
    id: "niftyindex",
    name: "Nifty 50 Index Fund",
    category: "Low risk • Index • Large Cap",
    returns: "14.80%",
    period: "3Y annualised",
    todayChange: "+0.45%",
    points: [50, 52, 51, 55, 57, 60, 62, 65, 67, 69, 72, 75, 78, 80, 82],
  },
];

const stockSymbolsList = [
  { code: "RELIANCE", name: "Reliance", color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/40" },
  { code: "TCS", name: "TCS", color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40" },
  { code: "HDFCBANK", name: "HDFC Bank", color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40" },
  { code: "INFY", name: "Infosys", color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/40" },
  { code: "ICICIBANK", name: "ICICI Bank", color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/40" },
  { code: "TATAMOTORS", name: "Tata Motors", color: "from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/40" },
  { code: "SBIN", name: "SBI Bank", color: "from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/40" },
  { code: "ITC", name: "ITC Ltd", color: "from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/40" },
  { code: "LT", name: "Larsen & T", color: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/40" },
  { code: "WIPRO", name: "Wipro", color: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/40" },
  { code: "BHARTIARTL", name: "Airtel", color: "from-red-500/20 to-orange-500/20 text-red-400 border-red-500/40" },
  { code: "BAJFINANCE", name: "Bajaj Fin", color: "from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/40" },
];

const GrowwGridShowcase = () => {
  const [selectedFundIndex, setSelectedFundIndex] = useState(0);
  const [selectedTimeframe, setSelectedTimeframe] = useState("3Y");
  const [hoveredCellIndex, setHoveredCellIndex] = useState(null);
  const [activeRandomCell, setActiveRandomCell] = useState(null);
  const [randomStockIndex, setRandomStockIndex] = useState(0);

  // Total cells in the grid matrix (6 rows x 10 cols)
  const totalGridCells = 60;

  // Auto-pulse random cells periodically to mimic Groww's live interactive grid background
  useEffect(() => {
    const interval = setInterval(() => {
      const randomCell = Math.floor(Math.random() * totalGridCells);
      const randomStock = Math.floor(Math.random() * stockSymbolsList.length);
      setActiveRandomCell(randomCell);
      setRandomStockIndex(randomStock);

      setTimeout(() => {
        setActiveRandomCell(null);
      }, 1200);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const currentFund = fundData[selectedFundIndex];

  // Helper to generate SVG path from graph data points
  const points = currentFund.points;
  const width = 360;
  const height = 110;
  const max = Math.max(...points);
  const min = Math.min(...points);

  const pathD = points
    .map((val, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - ((val - min) / (max - min || 1)) * (height - 20) - 10;
      return `${idx === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const fillD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  return (
    <div className="w-full bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden border-b border-slate-900">
      
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-20">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
          <Sparkles className="h-4 w-4" /> Direct Mutual Funds & SIPs
        </span>

        <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
          Build wealth, <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">SIP by SIP</span>
        </h2>

        <p className="mt-3 text-slate-300 text-base sm:text-lg">
          Invest in Direct Mutual Funds with 0% distributor commission & zero hidden charges.
        </p>

        <div className="mt-6">
          <NavLink
            to="/calculators"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            <span>Invest Now</span>
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>
      </div>

      {/* Main Interactive Showcase Container with Grid Background */}
      <div className="relative max-w-5xl mx-auto min-h-[520px] flex items-center justify-center p-4">
        
        {/* Background Interactive Mesh Grid (Groww Style) */}
        <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-10 grid-rows-6 border border-slate-800/40 rounded-3xl overflow-hidden bg-slate-950/60 backdrop-blur-3xl">
          {Array.from({ length: totalGridCells }).map((_, index) => {
            const isHovered = hoveredCellIndex === index;
            const isRandomActive = activeRandomCell === index;
            const isActive = isHovered || isRandomActive;

            // Pick stock data for this cell (cycle through array based on cell index or random)
            const stockIndex = isHovered 
              ? index % stockSymbolsList.length 
              : randomStockIndex;
            const stock = stockSymbolsList[stockIndex];

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCellIndex(index)}
                onMouseLeave={() => setHoveredCellIndex(null)}
                className="relative border border-slate-900/60 transition-all duration-300 flex items-center justify-center cursor-pointer hover:bg-slate-900/40 group"
              >
                {/* Temporary Fading Stock Badge on Hover/Pulse */}
                <div
                  className={`absolute inset-1 rounded-xl p-2 border flex flex-col items-center justify-center transition-all duration-500 backdrop-blur-md shadow-xl ${
                    isActive
                      ? "opacity-100 scale-100 z-10 bg-slate-900/90 " + stock.color
                      : "opacity-0 scale-75 pointer-events-none"
                  }`}
                >
                  <span className="text-[10px] font-black tracking-tight">{stock.code}</span>
                  <span className="text-[9px] text-slate-400 font-semibold truncate max-w-[90%]">{stock.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Featured Fund Interactive Card (Floating over Grid) */}
        <div className="relative z-20 w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/95 p-6 sm:p-7 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-emerald-500/40">
          
          {/* Card Top Pill & Logo */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md">
                ₹
              </div>
              <div>
                <h3 className="text-lg font-black text-white leading-snug">{currentFund.name}</h3>
                <span className="text-xs font-bold text-slate-400">{currentFund.category}</span>
              </div>
            </div>

            {/* Quick Fund Selector Pills */}
            <div className="flex gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {fundData.map((f, idx) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFundIndex(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    selectedFundIndex === idx ? "bg-emerald-400 scale-125" : "bg-slate-700 hover:bg-slate-500"
                  }`}
                  title={f.name}
                />
              ))}
            </div>
          </div>

          {/* Return Stats */}
          <div className="mt-4 flex items-baseline justify-between border-t border-slate-800/80 pt-4">
            <div>
              <div className="text-3xl font-black text-emerald-400 tracking-tight">
                {currentFund.returns}
              </div>
              <div className="text-xs font-semibold text-slate-400 mt-0.5">{currentFund.period}</div>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold">
                <TrendingUp className="h-3.5 w-3.5" />
                {currentFund.todayChange} 1D
              </span>
            </div>
          </div>

          {/* Interactive SVG Chart Graphic */}
          <div className="mt-5 relative h-28 w-full overflow-hidden rounded-xl bg-slate-950/60 p-2 border border-slate-800/60">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d={fillD} fill="url(#greenGradient)" />
              <path d={pathD} fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Timeframe Selector Pills */}
          <div className="mt-5 flex items-center justify-between border-t border-b border-slate-800 py-2.5">
            {["1M", "6M", "1Y", "3Y", "5Y", "All"].map((tf) => (
              <button
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-colors ${
                  selectedTimeframe === tf
                    ? "bg-slate-800 text-emerald-400 border border-emerald-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* Two Primary Action Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <NavLink
              to="/calculators"
              className="flex items-center justify-center py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs transition border border-slate-700 text-center"
            >
              One-time
            </NavLink>

            <NavLink
              to="/calculators"
              className="flex items-center justify-center py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition shadow-lg shadow-emerald-500/20 text-center"
            >
              Start SIP
            </NavLink>
          </div>

        </div>

      </div>

    </div>
  );
};

export default GrowwGridShowcase;
