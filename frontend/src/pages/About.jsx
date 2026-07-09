import Oneabout from "../components/Oneabout";
import Twoabout from "../components/Twoabout";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            About Equity-Plus
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            A refined platform for confident investing.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 sm:text-xl">
            We make market knowledge clearer, tools easier to use, and financial decisions more informed.
          </p>
        </div>
        <Oneabout />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <Twoabout />
      </section>
    </div>
  );
};

export default About;