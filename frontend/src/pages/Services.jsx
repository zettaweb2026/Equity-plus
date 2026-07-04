import {
  FaChartLine,
  FaCalculator,
  FaBookOpen,
  FaChartPie,
  FaWallet,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Services = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-sky-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-bold ">
            Our Services
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            Equity Plus offers powerful financial tools, educational resources,
            and market insights to help you invest smarter and grow your wealth
            with confidence.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <FaChartLine
                className="text-indigo-600 mb-5"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Market Insights
              </h3>

              <p className="text-gray-600 leading-7">
                Stay updated with the latest stock market trends, news, and
                performance to make informed investment decisions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <FaCalculator
                className="text-indigo-600 mb-5"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Financial Calculators
              </h3>

              <p className="text-gray-600 leading-7">
                Easily calculate SIP, EMI, Brokerage, CAGR, GST, and retirement
                plans with our smart calculators.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <FaBookOpen
                className="text-indigo-600 mb-5"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Learn Investing
              </h3>

              <p className="text-gray-600 leading-7">
                Learn stock market basics, investment strategies, and financial
                planning through simple educational resources.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <FaChartPie
                className="text-indigo-600 mb-5"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Stock Analysis
              </h3>

              <p className="text-gray-600 leading-7">
                Analyze company performance, charts, and financial indicators to
                evaluate investment opportunities.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <FaWallet
                className="text-indigo-600 mb-5"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Portfolio Planning
              </h3>

              <p className="text-gray-600 leading-7">
                Learn how to diversify your investments and build a balanced
                portfolio for long-term financial growth.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <FaShieldAlt
                className="text-indigo-600 mb-5"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                Secure Platform
              </h3>

              <p className="text-gray-600 leading-7">
                Experience a reliable and responsive platform built with
                simplicity, speed, and security in mind.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

     

      {/* How It Works */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-4">1</div>
              <h3 className="font-bold text-xl mb-3">
                Explore
              </h3>
              <p className="text-gray-600">
                Browse our financial tools and learning resources.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-4">2</div>
              <h3 className="font-bold text-xl mb-3">
                Learn
              </h3>
              <p className="text-gray-600">
                Understand market concepts through simple guides.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-4">3</div>
              <h3 className="font-bold text-xl mb-3">
                Analyze
              </h3>
              <p className="text-gray-600">
                Use calculators and insights before investing.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-4">4</div>
              <h3 className="font-bold text-xl mb-3">
                Grow
              </h3>
              <p className="text-gray-600">
                Build confidence and achieve your financial goals.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-white to-sky-200 py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold ">
            Start Your Investment Journey Today
          </h2>

          <p className="mt-6 text-lg leading-8">
            Explore powerful financial tools, gain market knowledge, and make
            smarter investment decisions with Equity Plus.
          </p>

          <NavLink
  to="/calculators"
  className="mt-10 mx-auto flex w-fit items-center justify-center gap-3 rounded-lg px-8 py-4 text-center text-xl font-bold text-indigo-800 transition duration-300 hover:bg-gray-100"
>
  Explore Tools
  <FaArrowRight />
</NavLink>

        </div>

      </section>

    </div>
  );
};

export default Services;