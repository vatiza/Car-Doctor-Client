import About from "./About/About";
import Banner from "./Banner/Banner";
import MiddleFooter from "./MiddleFooter/MiddleFooter";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <MiddleFooter></MiddleFooter>
    </div>
  );
};

export default Home;
