const Oneabout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.2)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Who We Are
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Built for investors who value clarity and trust.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Equity Plus is a modern stock market platform created to help people learn, analyze, and make confident financial choices. We believe informed investing should feel practical, approachable, and dependable.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Our Approach
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">Simple guidance</h3>
              <p className="mt-1 text-sm leading-7 text-slate-600">
                We turn complex market ideas into clear, useful insights.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">Reliable tools</h3>
              <p className="mt-1 text-sm leading-7 text-slate-600">
                Our calculators and resources are designed to support smarter decisions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">Confidence at every stage</h3>
              <p className="mt-1 text-sm leading-7 text-slate-600">
                Whether you are starting out or refining your strategy, we are here to support you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oneabout;