import { AiFillBank, AiFillGold } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { IoLogoUsd } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";

const Widget = ({ icon, title, value, sub }) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex size-20 items-center justify-center rounded-full bg-indigo-900 text-4xl text-white sm:size-24 sm:text-5xl">
      {icon}
    </div>
    <h1 className="text-center text-lg font-semibold sm:text-xl">
      {title}
      <br />
      {value}
    </h1>
    {sub && <div className="mt-1 text-sm text-slate-500">{sub}</div>}
  </div>
);

const formatNumber = (num, currency) => {
  if (num === null || num === undefined) return "--";
  if (currency && currency.toUpperCase() === "INR") {
    return `₹${Number(num).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
  }
  if (currency && currency.toUpperCase() === "USD") {
    return `${Number(num).toFixed(2)}`;
  }
  return Number(num).toLocaleString(undefined, { maximumFractionDigits: 2 });
};

const Sechome = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMarket = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const host = import.meta.env.VITE_API_BASE_URL;
      const resp = await fetch(`${host}/api/market`);
      if (!resp.ok) throw new Error('Network response not ok');
      const json = await resp.json();
      if (json.success) setData(json.data);
      else setError('Failed to fetch');
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchMarket();
    }, 0);

    const id = window.setInterval(() => {
      void fetchMarket();
    }, 60 * 1000);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(id);
    };
  }, [fetchMarket]);

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {loading && (
        <div className="col-span-4 text-center text-sm text-slate-500">Loading market data...</div>
      )}

      {error && (
        <div className="col-span-4 text-center text-sm text-red-500">{error}</div>
      )}

      {!loading && !error && (
        <>
          <Widget
            icon={<GoGraph />}
            title="NIFTY 50"
            value={formatNumber(data?.NIFTY?.price)}
            sub={data?.NIFTY?.percent ? `${data?.NIFTY?.percent}%` : ''}
          />

          <Widget
            icon={<AiFillBank />}
            title="BANK NIFTY"
            value={formatNumber(data?.BANK_NIFTY?.price)}
            sub={data?.BANK_NIFTY?.percent ? `${data?.BANK_NIFTY?.percent}%` : ''}
          />

          <Widget
            icon={<AiFillGold />}
            title="GOLD"
            value={formatNumber(data?.GOLD?.price)}
            sub={data?.GOLD?.currency}
          />

          <Widget
            icon={<IoLogoUsd />}
            title="USD/INR"
            value={formatNumber(data?.USD_INR?.price)}
            sub={data?.USD_INR?.price ? 'INR' : ''}
          />

          <div className="col-span-4">
            <h3 className="mt-4 mb-3 text-lg font-semibold text-slate-900">Top NSE Stocks</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {data?.STOCKS && Object.keys(data.STOCKS).map((k) => (
                <div key={k} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <div className="text-sm font-medium text-slate-500">{k}</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">{formatNumber(data.STOCKS[k].price)}</div>
                  {data.STOCKS[k].percent != null && (
                    <div className="mt-1 text-sm text-slate-500">{data.STOCKS[k].percent}%</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sechome;