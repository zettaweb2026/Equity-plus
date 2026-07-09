import { FaPhoneAlt, FaCalculator } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const features = [
  {
    title: "Market insights",
    description: "Clear, practical updates that make financial information easier to interpret.",
  },
  {
    title: "Financial calculators",
    description: "Powerful tools that help you estimate goals, returns, and financial planning steps.",
  },
  {
    title: "Learning resources",
    description: "Beginner-friendly guidance designed to build confidence as you grow.",
  },
  {
    title: "Reliable information",
    description: "Thoughtful, accurate content you can use as a dependable reference point.",
  },
];

const Twoabout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-emerald-50" />
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.18)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              A professional partner for your next financial step.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Our team brings together different backgrounds in finance, but we share one commitment: ethical guidance, transparent advice, and a strong focus on helping you make informed choices.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Our vision</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              We envision a future where more people feel confident and capable in their financial decisions. Equity Plus aims to become a trusted companion for every investor.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 p-8 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Start your investment journey today.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Explore financial tools, learn about the stock market, and take your first confident step towards your goals.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <NavLink
            to="/contact"
            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-900 transition duration-300 hover:bg-slate-900 hover:text-emerald-400"
          >
            <FaPhoneAlt />
            Contact Us
          </NavLink>

          <NavLink
            to="/calculators"
            className="flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-600 px-5 py-3 text-base font-semibold text-white transition duration-300 hover:bg-emerald-700"
          >
            <FaCalculator />
            Financial Calculators
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Twoabout;