import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

/* Navbar */
const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <header className="w-full relative bg-white shadow-sm z-50">
      <nav
        className="w-full px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between max-w-[1800px] mx-auto"
        data-aos="fade-down"
      >
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="relative flex items-center">
            <h1 className="text-3xl font-bold text-gray-700 tracking-tight">
              Wander<span className="text-orange-500">L</span>ust
            </h1>
            <img
              src={logo}
              alt="plane"
              className="absolute -top-2 left-[100%] -translate-x-1/2 w-20 rotate-12"
            />
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-lg font-medium text-gray-600">
          <a href="#" className="text-xl hover:text-orange-600 transition-colors">
            Trip plan
          </a>
          <a href="#" className="text-xl hover:text-orange-600 transition-colors">
            Countries
          </a>
          <a href="#" className="text-xl hover:text-orange-600 transition-colors">
            Payment
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-xl text-gray-700 font-medium hover:text-orange-600 transition-colors"
          >
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
              <path d="M19 19H5v2h14v-2z" />
            </svg>
            Premium
          </a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-4 lg:gap-6">
          <a href="#" className="text-xl text-gray-700 font-medium hover:text-orange-500">
            login
          </a>
          <a
            href="#"
            className="text-xl px-5 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700"
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
};

/* Hero Section */
const HeroSection = ({
  mainTitle = "Discover Your Next Adventure",
  subtitle = "From ancient wonders to modern marvels",
  description = "Where every destination tells a story and every journey creates unforgettable memories",
  imageUrl =
    "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1920",
}) => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-2xl text-white" data-aos="fade-right">
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "'Satisfy', cursive",
              textShadow: "4px 4px 8px rgba(0,0,0,0.6)",
            }}
          >
            <span className="text-white">Discover</span>{" "}
            <span className="text-orange-500">Your Next</span> Adventure
          </h1>

          <p
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "'Satisfy', cursive" }}
          >
            {subtitle}
          </p>

          <p className="text-2xl mb-8 text-gray-200" style={{ fontFamily: "'Satisfy', cursive" }}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

/* Hotels */
const HotelsSection = ({ countryName = "Egypt" }) => {
  const hotels = [
    {
      id: 1,
      name: "Marriott Mena House",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      rating: 4.8,
      price: "$750",
      location: `Giza, ${countryName}`,
    },
    {
      id: 2,
      name: "Hyatt Regency Cairo West",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      rating: 4.6,
      price: "$620",
      location: `Cairo, ${countryName}`,
    },
    {
      id: 3,
      name: "Steigenberger Pyramids Cairo",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      rating: 4.7,
      price: "$440",
      location: `Giza, ${countryName}`,
    },
    {
      id: 4,
      name: "The Nile Ritz-Carlton",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      rating: 4.9,
      price: "$550",
      location: `Cairo, ${countryName}`,
    },
    {
      id: 5,
      name: "Four Seasons Hotel Cairo at Nile Plaza",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      rating: 4.8,
      price: "$650",
      location: `Cairo, ${countryName}`,
    },
    {
      id: 6,
      name: "Kempinski Nile Hotel",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      rating: 4.7,
      price: "$520",
      location: `Cairo, ${countryName}`,
    },
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold mb-12">Popular Hotels</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img src={hotel.image} className="h-64 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold">{hotel.name}</h3>
                <p className="text-gray-500">{hotel.location}</p>

                <div className="flex justify-between mt-4">
                  <span className="text-orange-600 font-bold">{hotel.price}</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-full">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Restaurants */
const RestaurantsSection = ({ countryName = "Egypt" }) => {
  const restaurants = [
    {
      id: 1,
      name: "Kanzel Restaurant",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800",
      rating: 4.8,
      price: "$150",
      location: `Cairo, ${countryName}`,
      cuisine: "International",
    },
    {
      id: 2,
      name: "Indira Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      rating: 4.6,
      price: "$120",
      location: `Cairo, ${countryName}`,
      cuisine: "Indian",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl font-bold mb-12">Popular Restaurants</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={r.image} className="h-64 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-bold">{r.name}</h3>
                <p className="text-gray-500">{r.location}</p>

                <div className="flex justify-between mt-4">
                  <span className="text-orange-600 font-bold">{r.price}</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-full">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Page */
const CountryPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HotelsSection />
      <RestaurantsSection />
    </>
  );
};

export default CountryPage;