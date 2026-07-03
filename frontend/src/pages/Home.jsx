import FAQ from "../components/FAQ";
import Fourhome from "../components/Fourhome";
import Herohome from "../components/Herohome";
import Sechome from "../components/Sechome";
import Thirhome from "../components/Thirhome";
const Home = () => {
    return (
        <div className="min-h-screen w-full">
           <Herohome />
           <h1 className="text-3xl text-sky-700 font-semibold text-center my-8">Today's Market Review</h1>
           <Sechome />
           <h1 className="text-3xl text-sky-700 font-semibold text-center my-8">Powerful Financial Calculators</h1>
           <Thirhome />
            <h1 className="text-3xl text-sky-700 font-semibold text-center my-20">What Investors Say</h1>
            <Fourhome />
        <FAQ />
        
        </div>
    );
}
export default Home;