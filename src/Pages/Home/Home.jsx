import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import HotelsSection from "../../Pages/Country/HotelsSection";
import CTA from "./CTA";
import Footer from "./Footer";

const Home = () => {
  const countries = ["egypt", "france", "turkey"];
  const [currentCountry, setCurrentCountry] = useState(countries[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % countries.length;
      setCurrentCountry(countries[index]);
    }, 4000); // كل 4 ثواني

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />

      <div className="transition-all duration-700 ease-in-out">
        <HotelsSection countryName={currentCountry} />
      </div>

      <CTA />
      <Footer />
    </>
  );
};

export default Home;