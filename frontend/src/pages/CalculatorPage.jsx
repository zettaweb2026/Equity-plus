import { useState, useMemo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  TrendingUp, 
  Percent, 
  Coins, 
  ArrowDownCircle, 
  ChevronsUp, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft 
} from "lucide-react";

// Indian currency standard formatting
const formatIndianCurrency = (num) => {
  const rounded = Math.round(num);
  const str = rounded.toString();
  const lastThree = str.substring(str.length - 3);
  const otherNumbers = str.substring(0, str.length - 3);
  if (otherNumbers !== '') {
    const formattedOthers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return `₹ ${formattedOthers},${lastThree}`;
  }
  return `₹ ${lastThree}`;
};

// Formatter for scales (e.g. 50L, 1Cr)
const formatIndianScale = (num) => {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1).replace(/\.0$/, '') + ' Cr';
  }
  if (num >= 100000) {
    return (num / 100000).toFixed(1).replace(/\.0$/, '') + ' L';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' K';
  }
  return num.toString();
};

const calculatorConfigs = {
  sip: {
    title: "SIP Calculator",
    subtitle: "Systematic Investment Plan",
    description: "Determine the wealth accumulated from your recurring monthly investments.",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    fields: [
      { id: "monthly", label: "Monthly Investment", type: "currency", min: 500, max: 1000000, step: 500, default: 25000 },
      { id: "rate", label: "Expected Return Rate (p.a.)", type: "percentage", min: 1, max: 30, step: 0.5, default: 12 },
      { id: "tenure", label: "Time Period (Years)", type: "years", min: 1, max: 40, step: 1, default: 10 },
    ],
    labels: {
      invested: "Total Investment",
      gain: "Wealth Gain",
      total: "Total Value",
    }
  },
  lumpsum: {
    title: "Lumpsum Calculator",
    subtitle: "One-time Investment",
    description: "Determine the wealth accumulated from a single one-time investment.",
    icon: Coins,
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20",
    fields: [
      { id: "totalInvest", label: "Total Investment", type: "currency", min: 1000, max: 10000000, step: 1000, default: 100000 },
      { id: "rate", label: "Expected Return Rate (p.a.)", type: "percentage", min: 1, max: 30, step: 0.5, default: 12 },
      { id: "tenure", label: "Time Period (Years)", type: "years", min: 1, max: 40, step: 1, default: 10 },
    ],
    labels: {
      invested: "Total Investment",
      gain: "Wealth Gain",
      total: "Total Value",
    }
  },
  "step-up-sip": {
    title: "Step-up SIP Calculator",
    subtitle: "SIP with Annual Step-up",
    description: "Determine returns when you increment your monthly investment by a percentage each year.",
    icon: ChevronsUp,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    fields: [
      { id: "monthly", label: "Monthly Investment", type: "currency", min: 500, max: 1000000, step: 500, default: 25000 },
      { id: "stepup", label: "Annual Step-up (%)", type: "percentage", min: 1, max: 50, step: 1, default: 10 },
      { id: "rate", label: "Expected Return Rate (p.a.)", type: "percentage", min: 1, max: 30, step: 0.5, default: 12 },
      { id: "tenure", label: "Time Period (Years)", type: "years", min: 1, max: 40, step: 1, default: 10 },
    ],
    labels: {
      invested: "Total Investment",
      gain: "Wealth Gain",
      total: "Total Value",
    }
  },
  emi: {
    title: "EMI Calculator",
    subtitle: "Equated Monthly Installment",
    description: "Determine your monthly loan installment, principal, and total interest payable.",
    icon: Percent,
    color: "from-rose-500 to-red-600",
    shadow: "shadow-rose-500/20",
    fields: [
      { id: "loan", label: "Loan Amount", type: "currency", min: 10000, max: 100000000, step: 10000, default: 5000000 },
      { id: "rate", label: "Interest Rate (p.a.)", type: "percentage", min: 1, max: 20, step: 0.1, default: 8.5 },
      { id: "tenure", label: "Loan Tenure (Years)", type: "years", min: 1, max: 30, step: 1, default: 20 },
    ],
    labels: {
      invested: "Principal Loan Amount",
      gain: "Total Interest Payable",
      total: "Total Amount Payable",
    }
  },
  swp: {
    title: "SWP Calculator",
    subtitle: "Systematic Withdrawal Plan",
    description: "Determine the final balance and interest earned during systematic monthly withdrawals.",
    icon: ArrowDownCircle,
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/20",
    fields: [
      { id: "totalInvest", label: "Total Investment", type: "currency", min: 10000, max: 100000000, step: 10000, default: 1000000 },
      { id: "withdrawal", label: "Monthly Withdrawal", type: "currency", min: 500, max: 500000, step: 500, default: 10000 },
      { id: "rate", label: "Expected Return Rate (p.a.)", type: "percentage", min: 1, max: 30, step: 0.5, default: 8 },
      { id: "tenure", label: "Time Period (Years)", type: "years", min: 1, max: 40, step: 1, default: 10 },
    ],
    labels: {
      invested: "Total Investment",
      gain: "Total Withdrawals",
      total: "Final Balance Value",
    }
  }
};

const CalculatorPage = () => {
  const { type } = useParams();
  
  // Guard against invalid types
  const config = calculatorConfigs[type] || calculatorConfigs.sip;
  const activeType = calculatorConfigs[type] ? type : "sip";

  // State to hold the current values of the fields
  const [inputs, setInputs] = useState(() => {
    const initial = {};
    Object.values(calculatorConfigs).forEach((c) => {
      c.fields.forEach((f) => {
        initial[`${c.title}_${f.id}`] = f.default;
      });
    });
    return initial;
  });

  const [expandedTable, setExpandedTable] = useState(false);

  const handleInputChange = (id, val) => {
    const parsed = parseFloat(val);
    if (!isNaN(parsed)) {
      setInputs((prev) => ({
        ...prev,
        [`${config.title}_${id}`]: parsed,
      }));
    }
  };

  const getInputValue = useCallback((id) => {
    return inputs[`${config.title}_${id}`] ?? config.fields.find((f) => f.id === id).default;
  }, [inputs, config]);

  // Perform Calculations based on calculator type
  const results = useMemo(() => {
    const tenure = getInputValue("tenure");
    const rate = getInputValue("rate");

    if (activeType === "sip") {
      const monthly = getInputValue("monthly");
      const monthlyRate = rate / 12 / 100;
      const totalMonths = tenure * 12;
      
      const totalValue = monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
      const invested = monthly * totalMonths;
      const gain = Math.max(0, totalValue - invested);

      const yearlyData = [];
      for (let y = 1; y <= tenure; y++) {
        const mCount = y * 12;
        const yearInvested = monthly * mCount;
        const yearVal = monthly * ((Math.pow(1 + monthlyRate, mCount) - 1) / monthlyRate) * (1 + monthlyRate);
        yearlyData.push({
          year: y,
          invested: yearInvested,
          value: yearVal,
          gain: Math.max(0, yearVal - yearInvested),
        });
      }

      return { invested, gain, total: totalValue, yearlyData };
    }

    if (activeType === "lumpsum") {
      const totalInvest = getInputValue("totalInvest");
      const r = rate / 100;
      const totalValue = totalInvest * Math.pow(1 + r, tenure);
      const invested = totalInvest;
      const gain = Math.max(0, totalValue - invested);

      const yearlyData = [];
      for (let y = 1; y <= tenure; y++) {
        const yearVal = totalInvest * Math.pow(1 + r, y);
        yearlyData.push({
          year: y,
          invested: totalInvest,
          value: yearVal,
          gain: Math.max(0, yearVal - totalInvest),
        });
      }

      return { invested, gain, total: totalValue, yearlyData };
    }

    if (activeType === "step-up-sip") {
      const monthly = getInputValue("monthly");
      const stepup = getInputValue("stepup");
      let balance = 0;
      let totalInvested = 0;
      const monthlyRate = rate / 12 / 100;
      const yearlyData = [];
      let currentMonthly = monthly;

      for (let y = 1; y <= tenure; y++) {
        let yearInvested = 0;
        for (let m = 1; m <= 12; m++) {
          balance = (balance + currentMonthly) * (1 + monthlyRate);
          yearInvested += currentMonthly;
        }
        totalInvested += yearInvested;
        yearlyData.push({
          year: y,
          invested: totalInvested,
          value: balance,
          gain: Math.max(0, balance - totalInvested),
        });
        currentMonthly = currentMonthly * (1 + stepup / 100);
      }

      return { invested: totalInvested, gain: balance - totalInvested, total: balance, yearlyData };
    }

    if (activeType === "emi") {
      const loan = getInputValue("loan");
      const monthlyRate = rate / 12 / 100;
      const totalMonths = tenure * 12;
      
      const emi = loan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      const totalPayable = emi * totalMonths;
      const totalInterest = Math.max(0, totalPayable - loan);

      const yearlyData = [];
      let balance = loan;
      let cumulativePrincipal = 0;
      let cumulativeInterest = 0;

      for (let y = 1; y <= tenure; y++) {
        let interestPaidThisYear = 0;
        let principalPaidThisYear = 0;
        for (let m = 1; m <= 12; m++) {
          const interest = balance * monthlyRate;
          const principal = emi - interest;
          balance = Math.max(0, balance - principal);
          interestPaidThisYear += interest;
          principalPaidThisYear += principal;
        }
        cumulativePrincipal += principalPaidThisYear;
        cumulativeInterest += interestPaidThisYear;
        yearlyData.push({
          year: y,
          invested: balance, // Balance Outstanding
          value: cumulativePrincipal, // Cumulative Principal Paid
          gain: cumulativeInterest, // Cumulative Interest Paid
        });
      }

      return { invested: loan, gain: totalInterest, total: totalPayable, emi, yearlyData };
    }

    if (activeType === "swp") {
      const totalInvest = getInputValue("totalInvest");
      const withdrawal = getInputValue("withdrawal");
      const monthlyRate = rate / 12 / 100;
      
      let balance = totalInvest;
      let totalWithdrawn = 0;
      const yearlyData = [];

      for (let y = 1; y <= tenure; y++) {
        for (let m = 1; m <= 12; m++) {
          if (balance <= 0) {
            balance = 0;
            break;
          }
          const interest = balance * monthlyRate;
          balance = balance + interest;
          
          let currentWithdrawal = withdrawal;
          if (balance < withdrawal) {
            currentWithdrawal = balance;
          }
          balance = Math.max(0, balance - currentWithdrawal);
          totalWithdrawn += currentWithdrawal;
        }
        yearlyData.push({
          year: y,
          invested: totalInvest,
          value: balance,
          gain: totalWithdrawn, // Cumulative withdrawals
        });
      }

      return { invested: totalInvest, gain: totalWithdrawn, total: balance, yearlyData };
    }

    return { invested: 0, gain: 0, total: 0, yearlyData: [] };
  }, [activeType, getInputValue]);

  // Donut chart calculations
  const donutChart = useMemo(() => {
    const { invested, gain, total } = results;
    if (!total || total <= 0) return { stroke1: 0, stroke2: 0, radius: 70, circ: 2 * Math.PI * 70 };
    
    const radius = 70;
    const circ = 2 * Math.PI * radius;
    
    // For SWP and EMI, the slice proportions change slightly:
    // EMI: Principal (invested) vs Interest (gain)
    // SWP: Total Invested vs Cumulative Withdrawal. However, we display remaining balance as the 'total' value.
    // So let's base slices on proportions of: Invested (Original/Invested) and Gain (Wealth gain / Interest / Withdrawal)
    const sum = invested + gain;
    const p1 = (invested / sum) * 100;
    const p2 = (gain / sum) * 100;

    const stroke1 = (p1 / 100) * circ;
    const stroke2 = (p2 / 100) * circ;

    return { stroke1, stroke2, radius, circ, p1, p2 };
  }, [results]);

  // Line chart coordinates mapping
  const lineChartPoints = useMemo(() => {
    const data = results.yearlyData;
    if (!data || data.length === 0) return { valPath: "", invPath: "", gridLines: [] };

    const svgW = 500;
    const svgH = 260;
    const pad = 40;
    const cW = svgW - 2 * pad;
    const cH = svgH - 2 * pad;

    // Find max value in dataset to scale properly
    let maxVal = 100;
    data.forEach((d) => {
      maxVal = Math.max(maxVal, d.value, d.invested, d.gain);
    });

    const getX = (i, len) => pad + (i / (len - 1)) * cW;
    const getY = (v) => (pad + cH) - (v / maxVal) * cH;

    let valPath = "";
    let invPath = "";

    // Draw initial point at 0
    // SIP/Lumpsum starting values
    const startInv = activeType === "sip" || activeType === "step-up-sip" ? 0 : results.invested;
    const startVal = activeType === "sip" || activeType === "step-up-sip" ? 0 : results.invested;
    
    // Path constructors
    valPath = `M ${getX(0, data.length + 1)} ${getY(startVal)}`;
    invPath = `M ${getX(0, data.length + 1)} ${getY(startInv)}`;

    data.forEach((d, idx) => {
      const x = getX(idx + 1, data.length + 1);
      
      // For EMI, invested represents Outstanding Balance, and value is Cumulative Principal Paid.
      // Let's plot Value (Wealth / Balance) and Invested (Cumulative Invested / Loan Outstanding).
      valPath += ` L ${x} ${getY(d.value)}`;
      invPath += ` L ${x} ${getY(d.invested)}`;
    });

    // Generate grid lines
    const gridLines = [];
    const ticks = 4;
    for (let i = 0; i <= ticks; i++) {
      const yVal = (maxVal / ticks) * i;
      const yPos = getY(yVal);
      gridLines.push({
        y: yPos,
        label: formatIndianScale(yVal),
      });
    }

    return { valPath, invPath, gridLines, svgW, svgH, pad, cW, cH };
  }, [results, activeType]);

  const IconComponent = config.icon;

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <Link 
            to="/calculators"
            className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Calculators
          </Link>
        </div>

        {/* Outer Layout: Sub-Navigation & Main Workspace */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Sub-Nav */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-md sticky top-28">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-4">
                Available Calculators
              </h4>
              <nav className="space-y-1.5">
                {Object.entries(calculatorConfigs).map(([key, calc]) => {
                  const NavIcon = calc.icon;
                  const isActive = activeType === key;
                  return (
                    <Link
                      key={key}
                      to={`/calculator/${key}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                        isActive 
                          ? `bg-gradient-to-r ${calc.color} text-white shadow-md ${calc.shadow}`
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <NavIcon className="h-4.5 w-4.5" />
                      <span>{calc.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Calculator Interface */}
          <div className="flex-1 space-y-8">
            {/* Header info */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${config.color} text-white`}>
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                    {config.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                  {config.title}
                </h2>
                <p className="text-slate-600 text-sm max-w-xl">
                  {config.description}
                </p>
              </div>
            </div>

            {/* Main Interactive Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sliders & Inputs Panel */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-md lg:col-span-7 space-y-8">
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3 flex items-center gap-2">
                  Adjust Parameters
                </h3>

                <div className="space-y-8">
                  {config.fields.map((field) => {
                    const currentVal = getInputValue(field.id);
                    return (
                      <div key={field.id} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-semibold text-slate-700">
                            {field.label}
                          </label>
                          <div className="relative rounded-lg shadow-sm w-36">
                            <input
                              type="number"
                              className="w-full text-right font-bold text-slate-900 border border-slate-200 rounded-lg py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm bg-slate-50/50"
                              value={currentVal}
                              min={field.min}
                              max={field.max}
                              step={field.step}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                              {field.type === "currency" ? "₹" : field.type === "percentage" ? "%" : "Yrs"}
                            </span>
                          </div>
                        </div>

                        {/* Slider bar */}
                        <div className="relative">
                          <input
                            type="range"
                            min={field.min}
                            max={field.max}
                            step={field.step}
                            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
                            value={currentVal}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                          />
                          <div className="flex justify-between text-xxs font-bold text-slate-400 mt-1">
                            <span>{field.type === "currency" ? formatIndianScale(field.min) : field.min}</span>
                            <span>{field.type === "currency" ? formatIndianScale(field.max) : field.max}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Charts & Summary Result Panel */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-md lg:col-span-5 flex flex-col justify-between gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-3">
                    Est. Calculation Result
                  </h3>

                  {/* Highlight Box */}
                  <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-100 flex flex-col items-center justify-center text-center">
                    {activeType === "emi" && (
                      <div className="mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Monthly Loan EMI
                        </span>
                        <p className="text-3xl sm:text-4xl font-black text-rose-600 mt-1">
                          {formatIndianCurrency(results.emi)}
                        </p>
                      </div>
                    )}
                    {activeType !== "emi" && (
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {config.labels.total}
                        </span>
                        <p className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${config.color} bg-clip-text text-transparent mt-1`}>
                          {formatIndianCurrency(results.total)}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Summary Breakdowns */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-slate-300" />
                        <span className="font-medium text-slate-500">{config.labels.invested}</span>
                      </div>
                      <span className="font-extrabold text-slate-800">
                        {formatIndianCurrency(results.invested)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-indigo-500" />
                        <span className="font-medium text-slate-500">{config.labels.gain}</span>
                      </div>
                      <span className="font-extrabold text-slate-800">
                        {formatIndianCurrency(results.gain)}
                      </span>
                    </div>

                    {activeType === "emi" && (
                      <div className="flex items-center justify-between text-sm border-t border-slate-100 pt-3">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-rose-600" />
                          <span className="font-bold text-slate-700">{config.labels.total}</span>
                        </div>
                        <span className="font-black text-rose-600">
                          {formatIndianCurrency(results.total)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* SVG Donut Chart */}
                <div className="flex justify-center items-center py-4">
                  <div className="relative h-44 w-44">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                      {/* Base Background Track */}
                      <circle
                        r={donutChart.radius}
                        cx="80"
                        cy="80"
                        fill="transparent"
                        stroke="#e2e8f0"
                        strokeWidth="16"
                      />
                      {/* Invested Slice */}
                      <circle
                        r={donutChart.radius}
                        cx="80"
                        cy="80"
                        fill="transparent"
                        stroke="#cbd5e1"
                        strokeWidth="18"
                        strokeDasharray={`${donutChart.stroke1} ${donutChart.circ}`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                      {/* Gain Slice */}
                      <circle
                        r={donutChart.radius}
                        cx="80"
                        cy="80"
                        fill="transparent"
                        stroke="#6366f1"
                        strokeWidth="20"
                        strokeDasharray={`${donutChart.stroke2} ${donutChart.circ}`}
                        strokeDashoffset={`-${donutChart.stroke1}`}
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                    </svg>
                    {/* Inner Legend Box */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xxs font-black text-slate-400 uppercase tracking-widest">
                        Ratio
                      </span>
                      <span className="text-sm font-extrabold text-slate-700 mt-0.5">
                        {donutChart.p1 ? Math.round(donutChart.p1) : 0}% / {donutChart.p2 ? Math.round(donutChart.p2) : 0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Chart Panel */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-md">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                Wealth Growth Projection
              </h3>

              <div className="w-full overflow-hidden flex justify-center">
                <svg
                  className="w-full max-w-2xl h-auto"
                  viewBox={`0 0 ${lineChartPoints.svgW || 500} ${lineChartPoints.svgH || 260}`}
                >
                  <defs>
                    <linearGradient id="valGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="invGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  {lineChartPoints.gridLines.map((line, idx) => (
                    <g key={idx}>
                      <line
                        x1={lineChartPoints.pad}
                        y1={line.y}
                        x2={lineChartPoints.svgW - lineChartPoints.pad}
                        y2={line.y}
                        stroke="#f1f5f9"
                        strokeWidth="1.5"
                      />
                      <text
                        x={lineChartPoints.pad - 10}
                        y={line.y + 4}
                        textAnchor="end"
                        className="text-xxs font-bold fill-slate-400"
                      >
                        {line.label}
                      </text>
                    </g>
                  ))}

                  {/* Areas Under Curves */}
                  {lineChartPoints.valPath && (
                    <path
                      d={`${lineChartPoints.valPath} L ${lineChartPoints.svgW - lineChartPoints.pad} ${lineChartPoints.svgH - lineChartPoints.pad} L ${lineChartPoints.pad} ${lineChartPoints.svgH - lineChartPoints.pad} Z`}
                      fill="url(#valGrad)"
                    />
                  )}
                  {lineChartPoints.invPath && (
                    <path
                      d={`${lineChartPoints.invPath} L ${lineChartPoints.svgW - lineChartPoints.pad} ${lineChartPoints.svgH - lineChartPoints.pad} L ${lineChartPoints.pad} ${lineChartPoints.svgH - lineChartPoints.pad} Z`}
                      fill="url(#invGrad)"
                    />
                  )}

                  {/* Curves */}
                  {lineChartPoints.invPath && (
                    <path
                      d={lineChartPoints.invPath}
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  )}
                  {lineChartPoints.valPath && (
                    <path
                      d={lineChartPoints.valPath}
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  )}

                  {/* Labels on x-axis */}
                  <text
                    x={lineChartPoints.pad}
                    y={lineChartPoints.svgH - lineChartPoints.pad + 20}
                    textAnchor="middle"
                    className="text-xxs font-bold fill-slate-400"
                  >
                    Start
                  </text>
                  <text
                    x={lineChartPoints.svgW - lineChartPoints.pad}
                    y={lineChartPoints.svgH - lineChartPoints.pad + 20}
                    textAnchor="middle"
                    className="text-xxs font-bold fill-slate-400"
                  >
                    Year {results.yearlyData.length}
                  </text>
                </svg>
              </div>

              {/* Chart Legend */}
              <div className="flex justify-center gap-6 mt-4 text-xs font-bold">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-5 bg-slate-300 rounded" />
                  <span className="text-slate-500">
                    {activeType === "emi" ? "Remaining Balance" : "Total Investment"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-5 bg-indigo-500 rounded" />
                  <span className="text-slate-500">
                    {activeType === "emi" ? "Cumulative Principal Paid" : "Total Wealth Value"}
                  </span>
                </div>
              </div>
            </div>

            {/* Year-by-Year Projection Tables */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-md overflow-hidden">
              <button
                type="button"
                onClick={() => setExpandedTable((prev) => !prev)}
                className="w-full flex items-center justify-between text-left font-bold text-slate-800 group hover:text-indigo-600 transition-colors"
              >
                <span className="text-lg">Detailed Year-on-Year Growth Table</span>
                {expandedTable ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              <div 
                className={`transition-all duration-300 overflow-x-auto ${
                  expandedTable ? "max-h-[500px] mt-6 border border-slate-100 rounded-xl" : "max-h-0"
                }`}
              >
                <table className="min-w-full divide-y divide-slate-100 text-sm text-left">
                  <thead className="bg-slate-50 font-semibold text-slate-500">
                    <tr>
                      <th className="px-6 py-3.5">Year</th>
                      <th className="px-6 py-3.5">
                        {activeType === "emi" ? "Principal Balance Outstanding" : "Cumulative Invested"}
                      </th>
                      <th className="px-6 py-3.5">
                        {activeType === "emi" ? "Cumulative Interest Paid" : "Wealth Earned"}
                      </th>
                      <th className="px-6 py-3.5">
                        {activeType === "emi" ? "Cumulative Principal Paid" : "Total Estimated Value"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    {results.yearlyData.map((data) => (
                      <tr key={data.year} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 text-slate-900 font-bold">Year {data.year}</td>
                        <td className="px-6 py-4">{formatIndianCurrency(data.invested)}</td>
                        <td className="px-6 py-4">{formatIndianCurrency(data.gain)}</td>
                        <td className="px-6 py-4 font-bold text-slate-900">{formatIndianCurrency(data.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
