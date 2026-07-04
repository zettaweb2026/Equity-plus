import Oneabout from "../components/Oneabout";
import Twoabout from "../components/Twoabout";
const About = () => {
    return (
    
        <div className="w-full overflow-x-hidden">
          <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h1 className="my-6 text-center text-3xl font-bold  sm:text-3xl lg:text-4xl">
            About Equity-Plus
        </h1>
        <Oneabout />
      </section>
       <section className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <h1 className="my-6 text-center text-2xl font-bold  sm:text-2xl lg:text-3xl">
            Our Mission
        </h1>
        <Twoabout />
      </section>
        </div>

    );
}
export default About;