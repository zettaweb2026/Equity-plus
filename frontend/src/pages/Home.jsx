import Herohome from "../components/Herohome";
import Sechome from "../components/Sechome";
const Home = () => {
    return (
        <div className="min-h-screen w-full">
           <Herohome />
           <h1 className="text-3xl text-sky-700 font-semibold text-center my-8">Today's Market Review</h1>
           <Sechome />
        </div>
    );
}
export default Home;