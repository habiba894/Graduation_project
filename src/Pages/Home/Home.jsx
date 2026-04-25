import Navbar from "../../Components/Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Hotels from "./Hotels";
import CTA from "./CTA";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Hotels />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;