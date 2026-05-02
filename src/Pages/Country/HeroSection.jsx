import React, { useState, useEffect, useCallback } from "react";
const HeroSection = ({ onCountryChange }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      country: "Egypt",
      title: "Egypt",
      subtitle: "Where ancient wonders meet modern magic",
      image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1920&q=80",
      overlay: "from-amber-900/80 via-orange-900/60 to-transparent",
      temperature: "24°C",
      weather: "Sunny",
      city: "Cairo",
      highlights: ["Pyramids", "Nile Cruise", "Red Sea"]
    },
    {
      id: 2,
      country: "France",
      title: "France",
      subtitle: "Romance, art, and timeless elegance await",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
      overlay: "from-indigo-900/80 via-purple-900/60 to-transparent",
      temperature: "18°C",
      weather: "Partly Cloudy",
      city: "Paris",
      highlights: ["Eiffel Tower", "Louvre", "French Riviera"]
    },
    {
      id: 3,
      country: "Turkey",
      title: "Turkey",
      subtitle: "A breathtaking bridge between continents",
      image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1920&q=80",
      overlay: "from-rose-900/80 via-pink-900/60 to-transparent",
      temperature: "22°C",
      weather: "Clear Sky",
      city: "Istanbul",
      highlights: ["Bosphorus", "Cappadocia", "Grand Bazaar"]
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // 🎯 لما السلايد يتغير، نبلغ البارنت (CountryPage)
  useEffect(() => {
    if (onCountryChange) {
      onCountryChange(slides[currentSlide].country);
    }
  }, [currentSlide, onCountryChange, slides]);

  // Auto-play with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextSlide, prevSlide]);

  const current = slides[currentSlide];
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;

  return (
    <section 
      className="relative h-[700px] md:h-[850px] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-out">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ 
            backgroundImage: `url('${slides[prevIndex].image}')`,
            transition: 'transform 8s ease-out'
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[prevIndex].overlay} opacity-0`} />
      </div>

      {/* Current Slide */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10000ms] ease-linear group-hover:scale-110"
          style={{ 
            backgroundImage: `url('${current.image}')`,
            transform: `scale(${isHovered ? 1.1 : 1.05}) translateX(${isHovered ? (direction * 2) : 0}px)`
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${current.overlay} transition-all duration-700`} />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PHBhdHRlcm4gaWQ9Im5vaXNlIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0iI2ZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNub2lzZSkiLz48L3N2Zz4=')] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-3xl">
          <h1
            key={`title-${currentSlide}`}
            className="text-7xl md:text-9xl font-black mb-5 leading-none text-white drop-shadow-2xl"
            style={{ 
              fontFamily: "'Satisfy', cursive",
              animation: 'titleReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
              textShadow: "0 10px 40px rgba(0,0,0,0.4)"
            }}
          >
            {current.title}
          </h1>
          <p
            key={`subtitle-${currentSlide}`}
            className="text-2xl md:text-4xl text-white/95 mb-10 font-light leading-relaxed max-w-2xl"
            style={{ 
              fontFamily: "'Satisfy', cursive",
              animation: 'contentReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards',
              opacity: 0,
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}
          >
            {current.subtitle}
          </p>

          {/* Weather Card */}
          <div
            key={`weather-${currentSlide}`}
            className="inline-flex items-center gap-6 px-8 py-5 bg-white/15 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl shadow-black/20"
            style={{
              animation: 'contentReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards',
              opacity: 0
            }}
          >
            <div className="flex items-center gap-4 pr-6 border-r border-white/20">
              <div className="relative">
                <svg className="w-12 h-12 text-amber-300 drop-shadow-lg animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
                </svg>
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg animate-ping" />
              </div>
              <div>
                <p className="text-4xl font-bold text-white">{current.temperature}</p>
                <p className="text-sm text-white/80 font-medium">{current.weather}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-2">
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-lg font-semibold text-white">{current.city}</p>
                <p className="text-xs text-white/60">{current.country}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div 
            key={`stats-${currentSlide}`}
            className="mt-8 flex flex-wrap gap-4"
            style={{
              animation: 'contentReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards',
              opacity: 0
            }}
          >
            {current.highlights.map((item, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Triangle Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 group/triangle"
        aria-label="Previous destination"
      >
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-lg transition-transform duration-300 group-hover/triangle:-translate-x-1">
              <path d="M 28 8 L 28 32 L 10 20 Z" className="fill-white/15 stroke-white/40 stroke-1 group-hover/triangle:fill-white/25 transition-all duration-300" />
              <path d="M 28 8 L 28 32 L 10 20 Z" className="fill-transparent stroke-amber-400/60 stroke-[0.5] opacity-0 group-hover/triangle:opacity-100 transition-opacity duration-300" />
            </svg>
          </div>
          <svg className="relative w-5 h-5 md:w-6 md:h-6 text-white/90 group-hover/triangle:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="absolute inset-0 bg-amber-400/0 group-hover/triangle:bg-amber-400/10 rounded-lg transition-colors duration-300" />
        </div>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 group/triangle"
        aria-label="Next destination"
      >
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-lg transition-transform duration-300 group-hover/triangle:translate-x-1">
              <path d="M 12 8 L 12 32 L 30 20 Z" className="fill-white/15 stroke-white/40 stroke-1 group-hover/triangle:fill-white/25 transition-all duration-300" />
              <path d="M 12 8 L 12 32 L 30 20 Z" className="fill-transparent stroke-amber-400/60 stroke-[0.5] opacity-0 group-hover/triangle:opacity-100 transition-opacity duration-300" />
            </svg>
          </div>
          <svg className="relative w-5 h-5 md:w-6 md:h-6 text-white/90 group-hover/triangle:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
          <div className="absolute inset-0 bg-amber-400/0 group-hover/triangle:bg-amber-400/10 rounded-lg transition-colors duration-300" />
        </div>
      </button>

      <style>{`
        @keyframes titleReveal {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); filter: blur(10px); }
          50% { filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes contentReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }
        .animate-blob { animation: blob 8s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </section>
  );
};
export default HeroSection;