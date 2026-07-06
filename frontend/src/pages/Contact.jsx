const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] bg-slate-900 p-7 text-white sm:p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Contact us</p>
            <h2 className="mt-3 text-3xl font-semibold">Let’s talk about your goals</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Share a few details and we’ll get back to you with the right guidance.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-200">
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="mt-1">support@equityplus.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p className="mt-1">8335050444</p>
              </div>
              <div>
                <p className="font-medium text-white">Office</p>
                <p className="mt-1">Barasat , West Bengal</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Send a message</h3>
            <p className="mt-2 text-sm text-slate-500">
              A quick note is enough to start the conversation.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                  <input
                    type="text"
                   
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  type="email"
                 
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us what you need help with..."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;