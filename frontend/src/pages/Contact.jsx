import { PhoneCall, Mail, MapPin, Send, ShieldCheck } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* Info Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-white flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4" /> 24/7 Priority Desk
              </span>
              <h2 className="text-3xl font-black tracking-tight text-white">Let’s talk about your wealth goals</h2>
              <p className="text-sm leading-relaxed text-slate-400 font-medium">
                Whether you have questions about account opening, brokerage rates, or calculator tools, our support team is here to assist.
              </p>

              <div className="mt-8 space-y-6 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs uppercase text-slate-400">Email Support</p>
                    <p className="font-semibold text-white">support@equityplus.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs uppercase text-slate-400">Phone Support</p>
                    <p className="font-semibold text-white">8335050444</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xs uppercase text-slate-400">Registered Office</p>
                    <p className="font-semibold text-white">Barasat, West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 text-xs text-slate-500">
              SEBI Registered Support • Response time &lt; 2 Hours
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
            <h3 className="text-2xl font-black text-white">Send a Message</h3>
            <p className="mt-1 text-sm text-slate-400">
              Fill in your details below to request a callback from our team.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-300">First Name</label>
                  <input
                    type="text"
                    placeholder="Rahul"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-300">Last Name</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-300">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us what you need help with..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;