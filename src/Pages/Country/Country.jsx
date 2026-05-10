import { useState } from "react";
import { useParams } from "react-router-dom";

import HeroSection from "./HeroSection";
import CategoryCards from "./CategoryCards";
import HotelsSection from "./HotelsSection";
import RestaurantsSection from "./RestaurantsSection";
import InfoSection from "./InfoSection";
import CTASection from "./CTASection";

const CountryPage = () => {
  const { countryName } = useParams();

  const [currentCountry, setCurrentCountry] = useState(
    countryName || "Egypt"
  );

  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
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