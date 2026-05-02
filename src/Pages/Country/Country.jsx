import { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CategoryCards from "./CategoryCards";
import HotelsSection from "./HotelsSection";
import RestaurantsSection from "./RestaurantsSection";
import InfoSection from "./InfoSection";
import CTASection from "./CTASection";  

const CountryPage = () => {
  const [currentCountry, setCurrentCountry] = useState("Egypt");

  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
      <Navbar />

      <HeroSection onCountryChange={setCurrentCountry} />

      <CategoryCards countryName={currentCountry} />
      <HotelsSection countryName={currentCountry} />
      <RestaurantsSection countryName={currentCountry} />
      <InfoSection countryName={currentCountry} />
      <CTASection currentCountry={currentCountry} />
    </div>
  );
};

export default CountryPage;