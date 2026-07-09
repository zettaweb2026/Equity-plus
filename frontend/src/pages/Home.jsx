import FAQ from "../components/FAQ";
import Fourhome from "../components/Fourhome";
import Herohome from "../components/Herohome";
// import Sechome from "../components/Sechome";
import Thirhome from "../components/Thirhome";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <Herohome />
      </section>



      <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h1 className="my-6 text-center text-2xl font-semibold text-sky-700 sm:text-3xl lg:text-4xl">
          Powerful Financial Calculators
        </h1>
        <Thirhome />
      </section>

      <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h1 className="my-8 text-center text-2xl font-semibold text-sky-700 sm:text-3xl lg:text-4xl">
          What Investors Say
        </h1>
        <Fourhome />
      </section>

      <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <FAQ />
      </section>
    </div>
  );
};

export default Home;