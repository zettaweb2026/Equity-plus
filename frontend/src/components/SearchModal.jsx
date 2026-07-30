import { useState, useEffect } from "react";
import { Search, X, TrendingUp, Calculator, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sampleStocks = [
  { symbol: "RELIANCE.NS", name: "Reliance Industries Ltd", type: "Stock", category: "Energy / Telecom", price: "₹2,980.50", change: "+1.8%" },
  { symbol: "TCS.NS", name: "Tata Consultancy Services", type: "Stock", category: "IT Services", price: "₹4,150.20", change: "+0.9%" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank Ltd", type: "Stock", category: "Banking", price: "₹1,640.00", change: "+1.2%" },
  { symbol: "INFY.NS", name: "Infosys Ltd", type: "Stock", category: "IT Services", price: "₹1,820.75", change: "-0.4%" },
  { symbol: "ICICIBANK.NS", name: "ICICI Bank Ltd", type: "Stock", category: "Banking", price: "₹1,210.30", change: "+2.1%" },
  { symbol: "TATAMOTORS.NS", name: "Tata Motors Ltd", type: "Stock", category: "Automotive", price: "₹980.40", change: "+3.5%" },
  { symbol: "NIFTY50", name: "NIFTY 50 Index", type: "Index", category: "NSE Benchmark", price: "24,250.20", change: "+0.45%" },
  { symbol: "BANKNIFTY", name: "NIFTY BANK Index", type: "Index", category: "Banking Index", price: "52,205.90", change: "+0.80%" },
];

const sampleCalculators = [
  { id: "sip", name: "SIP Calculator", type: "Calculator", desc: "Calculate wealth returns for monthly SIPs" },
  { id: "lumpsum", name: "Lumpsum Calculator", type: "Calculator", desc: "Calculate returns for one-time investments" },
  { id: "step-up-sip", name: "Step-up SIP Calculator", type: "Calculator", desc: "SIP with annual investment increments" },
  { id: "emi", name: "EMI Calculator", type: "Calculator", desc: "Estimate loan monthly installments" },
  { id: "swp", name: "SWP Calculator", type: "Calculator", desc: "Calculate systematic withdrawal returns" },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredStocks = sampleStocks.filter(
    (s) =>
      s.symbol.toLowerCase().includes(query.toLowerCase()) ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCalculators = sampleCalculators.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectCalculator = (id) => {
    onClose();
    navigate(`/calculator/${id}`);
  };

  const handleSelectStock = () => {
    onClose();
    navigate("/services");
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-16 px-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900 text-slate-100 shadow-2xl shadow-emerald-500/10">
        
        {/* Header & Input */}
        <div className="relative flex items-center border-b border-slate-800 px-5 py-4">
          <Search className="h-5 w-5 text-emerald-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stocks, indices, mutual funds, calculators..."
            className="w-full bg-transparent text-lg font-medium text-white placeholder-slate-500 focus:outline-none"
            autoFocus
          />
          {query ? (
            <button onClick={() => setQuery("")} className="text-slate-400 hover:text-white p-1">
              <X className="h-5 w-5" />
            </button>
          ) : (
            <span className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">
              ESC
            </span>
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Quick Category Badges */}
          {!query && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" /> Quick Discovery
              </p>
              <div className="flex flex-wrap gap-2">
                {["NIFTY 50", "SIP Calculator", "Top Gainers", "F&O Trading", "EMI Calculator"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag.split(" ")[0])}
                    className="rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold px-3 py-1.5 border border-slate-700 transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stocks & Indices */}
          {filteredStocks.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-indigo-400" /> Stocks & Market Indices
              </p>
              <div className="space-y-1.5">
                {filteredStocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    onClick={handleSelectStock}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer border border-transparent hover:border-emerald-500/30 transition group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white group-hover:text-emerald-400 transition">{stock.name}</span>
                        <span className="text-xs font-mono bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                          {stock.symbol}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{stock.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{stock.price}</div>
                      <div className={`text-xs font-semibold ${stock.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>
                        {stock.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Calculators */}
          {filteredCalculators.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Calculator className="h-3.5 w-3.5 text-emerald-400" /> Financial Calculators
              </p>
              <div className="space-y-1.5">
                {filteredCalculators.map((calc) => (
                  <div
                    key={calc.id}
                    onClick={() => handleSelectCalculator(calc.id)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/50 hover:bg-slate-800 cursor-pointer border border-transparent hover:border-indigo-500/30 transition group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-indigo-400 transition">{calc.name}</div>
                      <div className="text-xs text-slate-400">{calc.desc}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredStocks.length === 0 && filteredCalculators.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              No matching stocks or tools found for "<span className="text-white font-semibold">{query}</span>"
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/80 px-5 py-3 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span>Press <kbd className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">↑</kbd> <kbd className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">↓</kbd> to navigate</span>
            <span><kbd className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">↵</kbd> to select</span>
          </div>
          <span>Equity Plus Market Intelligence</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
