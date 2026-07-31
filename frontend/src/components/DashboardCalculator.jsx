import React, { useState, useMemo, useRef } from 'react';
import { 
  TrendingUp, 
  ChevronsUp, 
  Coins, 
  Percent, 
  Home, 
  Receipt, 
  Calendar, 
  ArrowDownCircle, 
  Landmark, 
  Repeat, 
  ShieldCheck,
  Calculator,
  Download
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid 
} from 'recharts';
import { useParams, Link } from 'react-router-dom';
import { toPng } from 'html-to-image';

// Indian currency standard formatting
const formatCurrency = (num) => {
  const rounded = Math.round(num);
  if (isNaN(rounded)) return '₹0';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(rounded);
};

const formatShortScale = (num) => {
  if (num >= 10000000) return (num / 10000000).toFixed(2).replace(/\.00$/, '') + ' Cr';
  if (num >= 100000) return (num / 100000).toFixed(2).replace(/\.00$/, '') + ' L';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' K';
  return Math.round(num).toString();
};

const CALCULATOR_CONFIGS = {
  sip: {
    category: "INVESTMENT",
    title: "SIP Calculator",
    fullName: "SIP Calculator (Systematic Investment Plan)",
    subtitle: "Systematic Investment Plan",
    overview: "Projects the future wealth accumulated from recurring monthly investments through compounding.",
    howTo: [
      "Set your Monthly Investment, Expected Return Rate, and Tenure using the sliders.",
      "Observe the Stacked Area Chart showing Total Invested vs Wealth Gained growing together.",
      "Track your projected growth and maturity metrics in real-time."
    ],
    icon: TrendingUp,
    fields: [
      { id: "monthly", label: "Monthly Investment", min: 500, max: 200000, step: 500, default: 15000, unit: "₹" },
      { id: "rate", label: "Expected Return Rate (p.a.)", min: 1, max: 30, step: 0.5, default: 12, unit: "%" },
      { id: "tenure", label: "Tenure (Years)", min: 1, max: 40, step: 1, default: 15, unit: "yr" }
    ],
    chartType: "stacked-area"
  },
  "step-up-sip": {
    category: "INVESTMENT",
    title: "Step-Up SIP",
    fullName: "Step-Up SIP Calculator",
    subtitle: "SIP with Annual Step-Up %",
    overview: "Calculates wealth accumulated when you step up your monthly contribution by a fixed percentage each year.",
    howTo: [
      "Input your Initial Monthly SIP and Annual Step-Up percentage.",
      "Set your Expected Return Rate and Tenure to simulate annual deposit growth.",
      "Review the Column Chart illustrating year-by-year contribution step-ups vs returns."
    ],
    icon: ChevronsUp,
    fields: [
      { id: "monthly", label: "Initial Monthly SIP", min: 500, max: 200000, step: 500, default: 15000, unit: "₹" },
      { id: "stepup", label: "Annual Step-Up", min: 1, max: 50, step: 1, default: 10, unit: "%" },
      { id: "rate", label: "Expected Return Rate (p.a.)", min: 1, max: 30, step: 0.5, default: 12, unit: "%" },
      { id: "tenure", label: "Tenure (Years)", min: 1, max: 40, step: 1, default: 15, unit: "yr" }
    ],
    chartType: "grouped-bar"
  },
  lumpsum: {
    category: "INVESTMENT",
    title: "Lumpsum",
    fullName: "Lumpsum Investment Calculator",
    subtitle: "One-Time Capital Investment",
    overview: "Estimates long-term wealth created from a single one-time lump sum investment.",
    howTo: [
      "Select your single initial lump sum investment amount.",
      "Adjust expected annual return rate and investment tenure.",
      "Compare initial flat principal baseline against the exponential wealth curve."
    ],
    icon: Coins,
    fields: [
      { id: "principal", label: "One-time Investment", min: 5000, max: 5000000, step: 5000, default: 100000, unit: "₹" },
      { id: "rate", label: "Expected Return Rate (p.a.)", min: 1, max: 30, step: 0.5, default: 12, unit: "%" },
      { id: "tenure", label: "Tenure (Years)", min: 1, max: 40, step: 1, default: 15, unit: "yr" }
    ],
    chartType: "lumpsum-area"
  },
  emi: {
    category: "LOANS & MORTGAGES",
    title: "EMI Calculator",
    fullName: "EMI Calculator (Equated Monthly Installment)",
    subtitle: "General Loan Repayment",
    overview: "Computes monthly loan installments and overall interest payable over the loan period.",
    howTo: [
      "Enter total loan amount required.",
      "Set loan interest rate and payback tenure in years.",
      "Examine the Donut Chart ratio of Principal Loan Paid vs Total Interest Paid."
    ],
    icon: Percent,
    fields: [
      { id: "loanAmount", label: "Loan Amount", min: 50000, max: 10000000, step: 50000, default: 1000000, unit: "₹" },
      { id: "rate", label: "Interest Rate (p.a.)", min: 1, max: 25, step: 0.25, default: 8.5, unit: "%" },
      { id: "tenure", label: "Loan Tenure (Years)", min: 1, max: 30, step: 1, default: 20, unit: "yr" }
    ],
    chartType: "pie-donut"
  },
  "home-loan-emi": {
    category: "LOANS & MORTGAGES",
    title: "Home Loan EMI",
    fullName: "Home Loan EMI Calculator",
    subtitle: "Mortgage & Property Loan Breakdown",
    overview: "Calculates net loan required after down payment and breaks down annual principal vs interest amortization.",
    howTo: [
      "Specify total property value and your down payment percentage.",
      "Set interest rate and loan repayment horizon.",
      "Analyze the Stacked Bar Chart displaying changing interest-to-principal proportions over time."
    ],
    icon: Home,
    fields: [
      { id: "homeValue", label: "Home Value", min: 500000, max: 50000000, step: 100000, default: 5000000, unit: "₹" },
      { id: "downPayment", label: "Down Payment", min: 0, max: 80, step: 5, default: 20, unit: "%" },
      { id: "rate", label: "Interest Rate (p.a.)", min: 1, max: 20, step: 0.25, default: 8.5, unit: "%" },
      { id: "tenure", label: "Loan Tenure (Years)", min: 1, max: 30, step: 1, default: 20, unit: "yr" }
    ],
    chartType: "stacked-bar-amortization"
  },
  "income-tax": {
    category: "TAX & SALARY",
    title: "Income Tax",
    fullName: "Income Tax Calculator (Old vs New Regime)",
    subtitle: "Tax Slabs Comparison",
    overview: "Compares tax liability under Old Tax Regime (with exemptions) vs New Tax Regime (simplified slabs).",
    howTo: [
      "Input your annual Gross Salary and eligible deductions (80C, HRA, etc.).",
      "Include any additional side income or interest.",
      "Compare the Clustered Bar Chart to see which tax regime saves you more money."
    ],
    icon: Receipt,
    fields: [
      { id: "grossSalary", label: "Gross Annual Salary", min: 300000, max: 10000000, step: 50000, default: 1500000, unit: "₹" },
      { id: "deductions", label: "Old Regime Deductions (80C/HRA)", min: 0, max: 500000, step: 10000, default: 250000, unit: "₹" },
      { id: "otherIncome", label: "Other / Interest Income", min: 0, max: 1000000, step: 10000, default: 0, unit: "₹" }
    ],
    chartType: "tax-clustered-bar"
  },
  retirement: {
    category: "PLANNING & INCOME",
    title: "Retirement Planning",
    fullName: "Retirement Planning Calculator",
    subtitle: "Wealth Accumulation & Drawdown",
    overview: "Maps out the accumulation phase up to retirement age followed by the post-retirement corpus depletion curve.",
    howTo: [
      "Provide your current age and target retirement age.",
      "Set current monthly living expenses, estimated inflation, and expected returns.",
      "View the Timeline Graph tracking corpus growth to peak retirement age and post-retirement drawdown."
    ],
    icon: Calendar,
    fields: [
      { id: "currentAge", label: "Current Age", min: 18, max: 60, step: 1, default: 30, unit: "yr" },
      { id: "retirementAge", label: "Target Retirement Age", min: 40, max: 75, step: 1, default: 60, unit: "yr" },
      { id: "monthlyExpenses", label: "Current Monthly Expenses", min: 10000, max: 500000, step: 5000, default: 50000, unit: "₹" },
      { id: "inflation", label: "Estimated Inflation (p.a.)", min: 1, max: 15, step: 0.5, default: 6, unit: "%" },
      { id: "preReturn", label: "Pre-Retirement Return Rate", min: 1, max: 25, step: 0.5, default: 12, unit: "%" },
      { id: "postReturn", label: "Post-Retirement Return Rate", min: 1, max: 20, step: 0.5, default: 7, unit: "%" }
    ],
    chartType: "retirement-timeline"
  },
  swp: {
    category: "PLANNING & INCOME",
    title: "SWP Calculator",
    fullName: "SWP Calculator (Systematic Withdrawal Plan)",
    subtitle: "Regular Pension & Monthly Cashflow",
    overview: "Simulates fixed monthly income withdrawals from an invested corpus over a chosen duration.",
    howTo: [
      "Set your total initial investment corpus and monthly withdrawal amount.",
      "Choose expected return rate and duration in years.",
      "Examine the Horizontal Stacked Bar Chart showing remaining balance vs cumulative payouts."
    ],
    icon: ArrowDownCircle,
    fields: [
      { id: "totalInvest", label: "Initial Corpus", min: 100000, max: 50000000, step: 100000, default: 2500000, unit: "₹" },
      { id: "withdrawal", label: "Monthly Withdrawal", min: 1000, max: 200000, step: 1000, default: 20000, unit: "₹" },
      { id: "rate", label: "Expected Return Rate (p.a.)", min: 1, max: 25, step: 0.5, default: 8, unit: "%" },
      { id: "tenure", label: "Duration (Years)", min: 1, max: 30, step: 1, default: 15, unit: "yr" }
    ],
    chartType: "swp-horizontal-bar"
  },
  fd: {
    category: "FIXED INCOME",
    title: "FD Calculator",
    fullName: "FD Calculator (Fixed Deposit)",
    subtitle: "Guaranteed Return Deposit",
    overview: "Calculates total interest earned and final maturity value for fixed bank deposits.",
    howTo: [
      "Select total lump sum deposit principal.",
      "Adjust annual FD interest rate and deposit tenure.",
      "Inspect the Donut Chart ratio of Principal Invested vs Interest Earned at Maturity."
    ],
    icon: Landmark,
    fields: [
      { id: "principal", label: "Principal Amount", min: 5000, max: 5000000, step: 5000, default: 100000, unit: "₹" },
      { id: "rate", label: "Interest Rate (p.a.)", min: 1, max: 15, step: 0.25, default: 7.5, unit: "%" },
      { id: "tenure", label: "Tenure (Years)", min: 1, max: 20, step: 1, default: 5, unit: "yr" }
    ],
    chartType: "fd-donut"
  },
  rd: {
    category: "FIXED INCOME",
    title: "RD Calculator",
    fullName: "RD Calculator (Recurring Deposit)",
    subtitle: "Monthly Savings Deposit",
    overview: "Computes compound interest on monthly recurring deposits over the tenure.",
    howTo: [
      "Set your monthly recurring deposit amount.",
      "Input bank interest rate and investment duration.",
      "Compare the Grouped Column Chart showing cumulative deposits vs total interest earned."
    ],
    icon: Repeat,
    fields: [
      { id: "monthly", label: "Monthly Deposit", min: 500, max: 200000, step: 500, default: 10000, unit: "₹" },
      { id: "rate", label: "Interest Rate (p.a.)", min: 1, max: 15, step: 0.25, default: 7.5, unit: "%" },
      { id: "tenure", label: "Tenure (Years)", min: 1, max: 15, step: 1, default: 5, unit: "yr" }
    ],
    chartType: "rd-grouped-bar"
  }
};

const CATEGORIES = [
  "INVESTMENT",
  "LOANS & MORTGAGES",
  "TAX & SALARY",
  "PLANNING & INCOME",
  "FIXED INCOME"
];

const DashboardCalculator = () => {
  const { type = 'sip' } = useParams();
  const activeType = CALCULATOR_CONFIGS[type] ? type : 'sip';
  const config = CALCULATOR_CONFIGS[activeType];

  // Dynamic input values per calculator
  const [inputs, setInputs] = useState(() => {
    const init = {};
    Object.keys(CALCULATOR_CONFIGS).forEach(key => {
      CALCULATOR_CONFIGS[key].fields.forEach(field => {
        init[`${key}_${field.id}`] = field.default;
      });
    });
    return init;
  });

  const chartRef = useRef(null);

  const getVal = (fieldId) => {
    const key = `${activeType}_${fieldId}`;
    const v = inputs[key];
    if (v === undefined || v === '') return 0;
    const num = parseFloat(v);
    return isNaN(num) ? 0 : num;
  };

  const handleInputChange = (fieldId, value) => {
    const cleanVal = String(value).replace(/[^0-9.]/g, '');
    setInputs(prev => ({
      ...prev,
      [`${activeType}_${fieldId}`]: cleanVal
    }));
  };

  const handleDownload = async () => {
    if (chartRef.current) {
      try {
        const dataUrl = await toPng(chartRef.current, { backgroundColor: '#0f172a' });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${activeType}-roadmap.png`;
        link.click();
      } catch (error) {
        console.error('Failed to capture screenshot', error);
      }
    }
  };

  // Math calculations & visualization datasets
  const calcResults = useMemo(() => {
    if (activeType === 'sip') {
      const monthly = getVal('monthly');
      const rate = getVal('rate');
      const tenure = getVal('tenure');
      const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
      const n = tenure * 12;

      const totalValue = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const totalInvested = monthly * n;
      const totalGain = Math.max(0, totalValue - totalInvested);

      const chartData = [];
      for (let y = 1; y <= tenure; y++) {
        const mCount = y * 12;
        const inv = monthly * mCount;
        const val = r === 0 ? inv : monthly * ((Math.pow(1 + r, mCount) - 1) / r) * (1 + r);
        const gain = Math.max(0, val - inv);
        chartData.push({
          name: `Yr ${y}`,
          invested: Math.round(inv),
          gain: Math.round(gain),
          total: Math.round(val)
        });
      }

      return {
        kpis: [
          { label: "Total Invested", val: formatCurrency(totalInvested), isHighlight: false },
          { label: "Total Wealth Gained", val: "+" + formatCurrency(totalGain), isHighlight: false },
          { label: "Projected Wealth", val: formatCurrency(totalValue), isHighlight: true }
        ],
        chartData
      };
    }

    if (activeType === 'step-up-sip') {
      const monthly = getVal('monthly');
      const stepup = getVal('stepup');
      const rate = getVal('rate');
      const tenure = getVal('tenure');
      const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
      const n = tenure * 12;

      let totalValue = 0;
      let totalInvested = 0;
      for (let m = 1; m <= n; m++) {
        const sipM = monthly * Math.pow(1 + stepup / 100, Math.floor((m - 1) / 12));
        totalValue += sipM * Math.pow(1 + r, n - m + 1);
        totalInvested += sipM;
      }
      const totalGain = Math.max(0, totalValue - totalInvested);

      const chartData = [];
      for (let y = 1; y <= tenure; y++) {
        const ny = y * 12;
        let yValue = 0;
        let yInvested = 0;
        for (let m = 1; m <= ny; m++) {
          const sipM = monthly * Math.pow(1 + stepup / 100, Math.floor((m - 1) / 12));
          yValue += sipM * Math.pow(1 + r, ny - m + 1);
          yInvested += sipM;
        }
        chartData.push({
          name: `Yr ${y}`,
          invested: Math.round(yInvested),
          gain: Math.round(Math.max(0, yValue - yInvested))
        });
      }

      return {
        kpis: [
          { label: "Total Invested", val: formatCurrency(totalInvested), isHighlight: false },
          { label: "Wealth Gain", val: "+" + formatCurrency(totalGain), isHighlight: false },
          { label: "Future Corpus", val: formatCurrency(totalValue), isHighlight: true }
        ],
        chartData
      };
    }

    if (activeType === 'lumpsum') {
      const principal = getVal('principal');
      const rate = getVal('rate');
      const tenure = getVal('tenure');

      const totalValue = principal * Math.pow(1 + rate / 100, tenure);
      const totalGain = Math.max(0, totalValue - principal);

      const chartData = [];
      for (let y = 1; y <= tenure; y++) {
        const yVal = principal * Math.pow(1 + rate / 100, y);
        chartData.push({
          name: `Yr ${y}`,
          principal: principal,
          totalValue: Math.round(yVal)
        });
      }

      return {
        kpis: [
          { label: "One-Time Principal", val: formatCurrency(principal), isHighlight: false },
          { label: "Interest Earned", val: "+" + formatCurrency(totalGain), isHighlight: false },
          { label: "Total Maturity Value", val: formatCurrency(totalValue), isHighlight: true }
        ],
        chartData
      };
    }

    if (activeType === 'emi') {
      const loanAmount = getVal('loanAmount');
      const rate = getVal('rate');
      const tenure = getVal('tenure');

      const mRate = rate / 12 / 100;
      const n = tenure * 12;

      const emi = mRate === 0 
        ? loanAmount / n 
        : (loanAmount * mRate * Math.pow(1 + mRate, n)) / (Math.pow(1 + mRate, n) - 1);
      
      const totalPayable = emi * n;
      const totalInterest = Math.max(0, totalPayable - loanAmount);

      const pieData = [
        { name: 'Principal Loan', value: Math.round(loanAmount), fill: '#2563eb' },
        { name: 'Interest Payable', value: Math.round(totalInterest), fill: '#38bdf8' }
      ];

      return {
        kpis: [
          { label: "Monthly EMI", val: formatCurrency(emi), isHighlight: true },
          { label: "Principal Loan", val: formatCurrency(loanAmount), isHighlight: false },
          { label: "Total Interest", val: formatCurrency(totalInterest), isHighlight: false }
        ],
        pieData
      };
    }

    if (activeType === 'home-loan-emi') {
      const homeValue = getVal('homeValue');
      const downPaymentPct = getVal('downPayment');
      const rate = getVal('rate');
      const tenure = getVal('tenure');

      const downPaymentAmt = homeValue * (downPaymentPct / 100);
      const loanAmount = Math.max(0, homeValue - downPaymentAmt);
      const mRate = rate / 12 / 100;
      const n = tenure * 12;

      const emi = mRate === 0 
        ? loanAmount / n 
        : (loanAmount * mRate * Math.pow(1 + mRate, n)) / (Math.pow(1 + mRate, n) - 1);

      const totalPayable = emi * n;
      const totalInterest = Math.max(0, totalPayable - loanAmount);

      let balance = loanAmount;
      const chartData = [];
      for (let y = 1; y <= tenure; y++) {
        let yInterest = 0;
        let yPrincipal = 0;
        for (let m = 1; m <= 12; m++) {
          const interest = balance * mRate;
          const principal = emi - interest;
          balance = Math.max(0, balance - principal);
          yInterest += interest;
          yPrincipal += principal;
        }
        chartData.push({
          name: `Yr ${y}`,
          principalPaid: Math.round(yPrincipal),
          interestPaid: Math.round(yInterest)
        });
      }

      return {
        kpis: [
          { label: "Net Loan Amount", val: formatCurrency(loanAmount), isHighlight: false },
          { label: "Monthly EMI", val: formatCurrency(emi), isHighlight: true },
          { label: "Total Interest", val: formatCurrency(totalInterest), isHighlight: false }
        ],
        chartData
      };
    }

    if (activeType === 'income-tax') {
      const gross = getVal('grossSalary');
      const deductions = getVal('deductions');
      const other = getVal('otherIncome');
      const totalIncome = gross + other;

      const stdDed = 50000;
      const taxableOld = Math.max(0, totalIncome - stdDed - deductions);
      let taxOld = 0;
      if (taxableOld > 1000000) {
        taxOld = 112500 + (taxableOld - 1000000) * 0.3;
      } else if (taxableOld > 500000) {
        taxOld = 12500 + (taxableOld - 500000) * 0.2;
      } else if (taxableOld > 250000) {
        taxOld = (taxableOld - 250000) * 0.05;
      }
      if (taxableOld <= 500000) taxOld = 0;
      taxOld = taxOld * 1.04;

      const stdDedNew = 75000;
      const taxableNew = Math.max(0, totalIncome - stdDedNew);
      let taxNew = 0;
      if (taxableNew > 1500000) {
        taxNew = 150000 + (taxableNew - 1500000) * 0.3;
      } else if (taxableNew > 1200000) {
        taxNew = 90000 + (taxableNew - 1200000) * 0.2;
      } else if (taxableNew > 900000) {
        taxNew = 45000 + (taxableNew - 900000) * 0.15;
      } else if (taxableNew > 600000) {
        taxNew = 15000 + (taxableNew - 600000) * 0.1;
      } else if (taxableNew > 300000) {
        taxNew = (taxableNew - 300000) * 0.05;
      }
      if (taxableNew <= 700000) taxNew = 0;
      taxNew = taxNew * 1.04;

      const chartData = [
        { regime: 'Old Regime', tax: Math.round(taxOld), fill: '#6366f1' },
        { regime: 'New Regime', tax: Math.round(taxNew), fill: '#38bdf8' }
      ];

      const diff = Math.abs(taxOld - taxNew);
      const recommended = taxNew <= taxOld ? 'New Regime' : 'Old Regime';

      return {
        kpis: [
          { label: "Tax Payable (Old)", val: formatCurrency(taxOld), isHighlight: false },
          { label: "Tax Payable (New)", val: formatCurrency(taxNew), isHighlight: true },
          { label: "Tax Savings (" + recommended + ")", val: formatCurrency(diff), isHighlight: false }
        ],
        chartData
      };
    }

    if (activeType === 'retirement') {
      const currentAge = getVal('currentAge');
      const retirementAge = getVal('retirementAge');
      const monthlyExpenses = getVal('monthlyExpenses');
      const inflation = getVal('inflation');
      const preReturn = getVal('preReturn');
      const postReturn = getVal('postReturn');

      const yearsToRetire = Math.max(1, retirementAge - currentAge);
      const monthlyExpenseAtRetire = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetire);
      const annualExpenseAtRetire = monthlyExpenseAtRetire * 12;

      const netPostReturn = (postReturn - inflation) / 100;
      const requiredCorpus = netPostReturn > 0 
        ? annualExpenseAtRetire * (1 - Math.pow(1 + netPostReturn, -20)) / netPostReturn
        : annualExpenseAtRetire * 25;

      const chartData = [];
      for (let age = currentAge; age <= retirementAge; age += 2) {
        const progressPct = (age - currentAge) / yearsToRetire;
        const corpusAtAge = requiredCorpus * Math.pow(progressPct, 1.8);
        chartData.push({
          name: `Age ${age}`,
          corpus: Math.round(corpusAtAge),
          phase: 'Accumulation'
        });
      }
      let remainingCorpus = requiredCorpus;
      for (let age = retirementAge + 2; age <= retirementAge + 20; age += 2) {
        const postYears = age - retirementAge;
        remainingCorpus = Math.max(0, requiredCorpus * (1 - Math.pow(postYears / 20, 1.2)));
        chartData.push({
          name: `Age ${age}`,
          corpus: Math.round(remainingCorpus),
          phase: 'Drawdown'
        });
      }

      return {
        kpis: [
          { label: "Target Retirement Age", val: `${retirementAge} Yrs`, isHighlight: false },
          { label: "Future Expense / Mo.", val: formatCurrency(monthlyExpenseAtRetire), isHighlight: false },
          { label: "Required Corpus", val: formatCurrency(requiredCorpus), isHighlight: true }
        ],
        chartData
      };
    }

    if (activeType === 'swp') {
      const totalInvest = getVal('totalInvest');
      const withdrawal = getVal('withdrawal');
      const rate = getVal('rate');
      const tenure = getVal('tenure');

      const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
      let balance = totalInvest;
      const chartData = [];

      for (let y = 1; y <= tenure; y++) {
        for (let m = 1; m <= 12; m++) {
          balance = balance * (1 + r) - withdrawal;
        }
        const cumWithdrawal = withdrawal * 12 * y;
        chartData.push({
          name: `Yr ${y}`,
          balance: Math.round(Math.max(0, balance)),
          withdrawn: Math.round(cumWithdrawal)
        });
      }

      const totalWithdrawals = withdrawal * 12 * tenure;

      return {
        kpis: [
          { label: "Initial Corpus", val: formatCurrency(totalInvest), isHighlight: false },
          { label: "Total Withdrawals", val: formatCurrency(totalWithdrawals), isHighlight: false },
          { label: "Remaining Balance", val: formatCurrency(Math.max(0, balance)), isHighlight: true }
        ],
        chartData
      };
    }

    if (activeType === 'fd') {
      const principal = getVal('principal');
      const rate = getVal('rate');
      const tenure = getVal('tenure');

      const maturity = principal * Math.pow(1 + rate / 100, tenure);
      const interestEarned = Math.max(0, maturity - principal);

      const pieData = [
        { name: 'Principal Invested', value: Math.round(principal), fill: '#2563eb' },
        { name: 'Interest Earned', value: Math.round(interestEarned), fill: '#38bdf8' }
      ];

      return {
        kpis: [
          { label: "Principal Invested", val: formatCurrency(principal), isHighlight: false },
          { label: "Interest Earned", val: "+" + formatCurrency(interestEarned), isHighlight: false },
          { label: "Maturity Amount", val: formatCurrency(maturity), isHighlight: true }
        ],
        pieData
      };
    }

    if (activeType === 'rd') {
      const monthly = getVal('monthly');
      const rate = getVal('rate');
      const tenure = getVal('tenure');

      const totalMonths = tenure * 12;
      const r = rate / 12 / 100;
      
      const chartData = [];
      let cumInvested = 0;
      let cumMaturity = 0;

      for (let y = 1; y <= tenure; y++) {
        const mCount = y * 12;
        cumInvested = monthly * mCount;
        
        cumMaturity = 0;
        for (let m = 1; m <= mCount; m++) {
          cumMaturity += monthly * Math.pow(1 + r, mCount - m + 1);
        }
        const cumInterest = Math.max(0, cumMaturity - cumInvested);
        chartData.push({
          name: `Yr ${y}`,
          invested: Math.round(cumInvested),
          interest: Math.round(cumInterest)
        });
      }

      return {
        kpis: [
          { label: "Total Deposit Amount", val: formatCurrency(cumInvested), isHighlight: false },
          { label: "Interest Earned", val: "+" + formatCurrency(cumMaturity - cumInvested), isHighlight: false },
          { label: "Maturity Value", val: formatCurrency(cumMaturity), isHighlight: true }
        ],
        chartData
      };
    }

    return { kpis: [], chartData: [] };
  }, [activeType, inputs]);

  const IconComp = config.icon;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950 pb-20">
      
      {/* Top Header Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
            <IconComp className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
            {config.subtitle}
          </span>
        </div>
        <h1 className="font-['Inter'] text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center tracking-tight mb-2">
          {config.fullName}
        </h1>
        <p className="text-center text-slate-400 text-xs uppercase tracking-widest mb-8">
          Financial Projection Tool • {config.category}
        </p>

        {/* Dual Info Boxes: Overview & How-To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Overview Box */}
          <div className="group bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.65)] transition-all duration-300 relative overflow-hidden">
            <span className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-sky-400/80" />
            <p className="text-[10px] uppercase tracking-[0.15em] text-sky-400 font-semibold mb-2 ml-3">Overview</p>
            <h2 className="text-base font-bold text-white mb-2 ml-3">What is the {config.title}?</h2>
            <p className="text-sm text-slate-300 leading-relaxed ml-3 font-normal">
              {config.overview}
            </p>
          </div>

          {/* How To Box */}
          <div className="group bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.65)] transition-all duration-300 relative overflow-hidden">
            <span className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-indigo-400/80" />
            <p className="text-[10px] uppercase tracking-[0.15em] text-indigo-400 font-semibold mb-2 ml-3">Steps</p>
            <h2 className="text-base font-bold text-white mb-2 ml-3">How to use this calculator</h2>
            <ol className="ml-3 text-sm text-slate-300 space-y-2">
              {config.howTo.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5 h-4 w-4 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px] font-bold border border-indigo-500/30">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </header>

      {/* Main Workspace: Parameters & Representation Side-by-Side */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* KPI Cards Band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {calcResults.kpis.map((kpi, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-5 border shadow-xl transition-all duration-300 ${
                kpi.isHighlight 
                  ? "bg-gradient-to-br from-sky-950/40 via-[#0f172a] to-[#0f172a] border-sky-500/40 shadow-[0_0_20px_rgba(56,189,248,0.12)]" 
                  : "bg-[#0f172a]/90 border-slate-800"
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {kpi.label}
              </p>
              <p className={`text-xl sm:text-2xl font-black tracking-tight ${
                kpi.isHighlight ? "text-sky-400" : "text-white"
              }`}>
                {kpi.val}
              </p>
            </div>
          ))}
        </div>

        {/* Side-by-Side Grid: Left (Parameters) & Right (Representation/Chart) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Input Parameters Panel (5 cols) */}
          <section className="lg:col-span-5 bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-bold text-white">
                Adjust Input Parameters
              </h3>
              <span className="text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                Live Controls
              </span>
            </div>

            <div className="space-y-6">
              {config.fields.map(field => {
                const val = getVal(field.id);
                return (
                  <div key={field.id} className="space-y-2.5">
                    <div className="flex justify-between items-center text-sm">
                      <label className="font-medium text-slate-300">{field.label}</label>
                      <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 px-3 py-1.5 rounded-xl text-right font-black text-sky-400 shadow-inner text-sm min-w-[100px] justify-end">
                        <span>{field.unit === '₹' ? formatCurrency(val) : `${val} ${field.unit}`}</span>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="range"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        value={val}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400 hover:bg-slate-700 transition-colors"
                      />
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">
                        <span>{field.unit === '₹' ? formatShortScale(field.min) : field.min}</span>
                        <span>{field.unit === '₹' ? formatShortScale(field.max) : field.max}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Right: Visual Projection & Analytics (7 cols) */}
          <section ref={chartRef} className="lg:col-span-7 bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white tracking-wide">
                Visual Projection & Analytics
              </h3>
              <button 
                onClick={handleDownload} 
                className="flex items-center gap-1.5 py-1.5 px-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all text-xs uppercase tracking-wider cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Roadmap</span>
              </button>
            </div>

            <div className="w-full pt-2">
              {/* 1. Stacked Area Chart (SIP) */}
              {config.chartType === 'stacked-area' && (
                <ResponsiveContainer width="100%" height={340}>
                  <AreaChart data={calcResults.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.7} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="colorGain" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.15} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#64748b" tickFormatter={(v) => formatShortScale(v)} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Area type="monotone" dataKey="invested" stackId="1" stroke="#2563eb" fill="url(#colorInvested)" name="Total Invested" />
                    <Area type="monotone" dataKey="gain" stackId="1" stroke="#38bdf8" fill="url(#colorGain)" name="Wealth Gained" />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {/* 2. Grouped Column Bar Chart (Step-Up SIP & RD) */}
              {(config.chartType === 'grouped-bar' || config.chartType === 'rd-grouped-bar') && (
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={calcResults.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#64748b" tickFormatter={(v) => formatShortScale(v)} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Bar dataKey="invested" fill="#2563eb" radius={[4, 4, 0, 0]} name="Cumulative Invested" />
                    <Bar dataKey={config.chartType === 'rd-grouped-bar' ? "interest" : "gain"} fill="#38bdf8" radius={[4, 4, 0, 0]} name={config.chartType === 'rd-grouped-bar' ? "Interest Earned" : "Wealth Gain"} />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* 3. Lumpsum Area Graph */}
              {config.chartType === 'lumpsum-area' && (
                <ResponsiveContainer width="100%" height={340}>
                  <AreaChart data={calcResults.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorLumpsum" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#64748b" tickFormatter={(v) => formatShortScale(v)} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Area type="monotone" dataKey="principal" stroke="#475569" fill="#334155" fillOpacity={0.3} name="Initial Principal (Baseline)" />
                    <Area type="monotone" dataKey="totalValue" stroke="#38bdf8" fill="url(#colorLumpsum)" name="Total Growth Value" />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {/* 4. Donut Pie Chart (EMI & FD) */}
              {(config.chartType === 'pie-donut' || config.chartType === 'fd-donut') && (
                <div className="flex justify-center items-center py-2">
                  <ResponsiveContainer width="100%" height={340}>
                    <PieChart>
                      <Pie
                        data={calcResults.pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={75}
                        outerRadius={115}
                        paddingAngle={6}
                        dataKey="value"
                        nameKey="name"
                      >
                        {calcResults.pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} stroke="#0f172a" strokeWidth={3} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                      <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}

              {/* 5. Stacked Bar Chart Amortization (Home Loan EMI) */}
              {config.chartType === 'stacked-bar-amortization' && (
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={calcResults.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#64748b" tickFormatter={(v) => formatShortScale(v)} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Bar dataKey="principalPaid" stackId="a" fill="#38bdf8" name="Principal Paid" />
                    <Bar dataKey="interestPaid" stackId="a" fill="#6366f1" name="Interest Paid" />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* 6. Clustered Bar Chart (Income Tax) */}
              {config.chartType === 'tax-clustered-bar' && (
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={calcResults.chartData} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="regime" stroke="#64748b" tick={{ fontSize: 13, fontWeight: 'bold' }} />
                    <YAxis stroke="#64748b" tickFormatter={(v) => formatShortScale(v)} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                    <Bar dataKey="tax" radius={[8, 8, 0, 0]} name="Tax Liability (₹)">
                      {calcResults.chartData.map((entry, index) => (
                        <Cell key={`tax-cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* 7. Retirement Timeline Graph */}
              {config.chartType === 'retirement-timeline' && (
                <ResponsiveContainer width="100%" height={340}>
                  <AreaChart data={calcResults.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRetirement" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.7} />
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                    <YAxis stroke="#64748b" tickFormatter={(v) => formatShortScale(v)} tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                    <Area type="monotone" dataKey="corpus" stroke="#38bdf8" strokeWidth={3} fill="url(#colorRetirement)" name="Retirement Corpus" />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {/* 8. Horizontal Stacked Bar Chart (SWP) */}
              {config.chartType === 'swp-horizontal-bar' && (
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={calcResults.chartData} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis type="number" stroke="#64748b" tickFormatter={(v) => formatShortScale(v)} tick={{ fontSize: 12 }} />
                    <YAxis dataKey="name" type="category" stroke="#64748b" tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '12px' }} formatter={(val) => formatCurrency(val)} />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Bar dataKey="balance" stackId="swp" fill="#38bdf8" name="Remaining Corpus" />
                    <Bar dataKey="withdrawn" stackId="swp" fill="#6366f1" name="Cumulative Payouts" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </section>

        </div>

        {/* Calculator Suite: Positioned Full-Width JUST UNDER the Calculator */}
        <section className="bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-slate-400">
            <Calculator className="h-5 w-5 text-sky-400" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Explore Complete Calculator Suite
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map(category => {
              const categoryCalcs = Object.entries(CALCULATOR_CONFIGS).filter(
                ([_, c]) => c.category === category
              );
              return (
                <div key={category} className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400/80 px-1 border-b border-slate-800/60 pb-1">
                    {category}
                  </div>
                  <div className="space-y-1.5">
                    {categoryCalcs.map(([key, calc]) => {
                      const NavIcon = calc.icon;
                      const isActive = activeType === key;
                      return (
                        <Link
                          key={key}
                          to={`/calculator/${key}`}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium text-xs transition-all duration-200 ${
                            isActive
                              ? "bg-sky-500/20 text-sky-400 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.15)] font-bold"
                              : "text-slate-400 hover:bg-slate-800 hover:text-white"
                          }`}
                        >
                          <NavIcon className="h-4 w-4 shrink-0" />
                          <span className="truncate">{calc.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

    </div>
  );
};

export default DashboardCalculator;
