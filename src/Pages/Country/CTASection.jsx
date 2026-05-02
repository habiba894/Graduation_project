import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CTASection = ({ currentCountry = "Egypt" }) => {
  const ctaData = {
    Egypt: {
      title: "Ready to explore the land of pharaohs?",
      subtitle: "Book your Egyptian adventure today and walk through history",
      image:
        "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1920&q=80",
      gradient: "from-amber-900/90 via-orange-900/80 to-amber-900/90",
      btnPrimary: "Explore Egypt",
      btnSecondary: "View Packages",
    },
    France: {
      title: "Ready to fall in love with Paris?",
      subtitle:
        "Experience romance, art, and world-class cuisine in France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
      gradient: "from-indigo-900/90 via-purple-900/80 to-indigo-900/90",
      btnPrimary: "Explore France",
      btnSecondary: "View Packages",
    },
    Turkey: {
      title: "Ready to discover East meets West?",
      subtitle:
        "Explore Turkey's rich culture, stunning landscapes, and legendary hospitality",
      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&q=80",
      gradient: "from-rose-900/90 via-pink-900/80 to-rose-900/90",
      btnPrimary: "Explore Turkey",
      btnSecondary: "View Packages",
    },
  };

  const data = ctaData[currentCountry] || ctaData.Egypt;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-10 w-full bg-gray-50">
      <div className="w-full px-6 md:px-12 lg:px-16">

        <div
          className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden rounded-2xl"
          data-aos="fade-up"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${data.image}')` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${data.gradient}`}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full text-center px-6">

              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                {data.title}
              </h2>

              <p className="text-sm sm:text-lg text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                {data.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-amber-800 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl">
                  {data.btnPrimary}
                </button>

                <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all shadow-xl">
                  {data.btnSecondary}
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;