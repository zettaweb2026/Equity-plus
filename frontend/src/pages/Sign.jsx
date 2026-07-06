const Sign = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
        <div className="hidden w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Equity Plus</p>
            <h2 className="mt-4 text-3xl font-semibold">Welcome back</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Sign in to continue tracking your financial goals with a simple and secure experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-sm font-medium">Why join?</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              <li>• Personalized insights</li>
              <li>• Fast access to calculators</li>
              <li>• Smart financial planning tools</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 p-6 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <p className="text-sm font-medium text-slate-500">Secure access</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Log in to your account</h1>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-800 focus:ring-slate-400" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-slate-700 hover:text-slate-900">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Sign in
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Sign;