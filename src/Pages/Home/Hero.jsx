import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/pyramidhome.jpg";
import img2 from "../../assets/paris home.avif";
import img3 from "../../assets/turky.jpg";

const images = [img1, img2, img3];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

 
  useEffect(() => {
    AOS.refresh();
  }, [current]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setMouse({ x, y });
  };

  return (
    <div
      className="relative h-screen flex flex-col justify-center px-6 md:px-12 text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 transition-all duration-1200 ease-out "
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: `${50 + mouse.x * 5}% ${50 + mouse.y * 5}%`,
          transform: `scale(1.1) translate(${mouse.x * 20}px, ${
            mouse.y * 20
          }px)`,
        }}
      />

      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white/20 px-3 py-2 rounded-full backdrop-blur hover:scale-110 transition"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white/20 px-3 py-2 rounded-full backdrop-blur hover:scale-110 transition"
      >
        ▶
      </button>

      <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 gap-4 z-20 overflow-hidden">
        {images.map((img, i) => {
          const index = (current + i + 1) % images.length;

          return (
            <div
              key={i}
              onClick={() => setCurrent(index)}
              className="cursor-pointer w-35 h-55 rounded-2xl bg-cover bg-center shadow-xl transition-all duration-500"
              style={{
                backgroundImage: `url(${images[index]})`,
                transform: `
                  translateY(${mouse.y * 10}px)
                  scale(${1 - i * 0.1})
                `,
                opacity: 1 - i * 0.3,
              }}
            />
          );
        })}
      </div>

      <div key={current} className="relative z-30 max-w-175">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Your complete guide for a{" "}
          <span className="text-[#d14b30]">seamless</span> travel experience
        </h1>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 ms-20 flex gap-4"
        >
          <button className="bg-[#d14b30] px-5 py-2 rounded-full hover:scale-105 transition">
            Start Planning
          </button>
          <button className="bg-transparent border border-[#d14b30] text-[#d14b30] font-extrabold px-5 py-2 rounded-full hover:scale-105 transition">
            Explore Now
          </button>
        </div>

<div
  data-aos="fade-up"
  data-aos-delay="500"
  className="mt-15 ms-15 bg-white text-black p-2 md:p-3 rounded-2xl flex flex-col md:flex-row items-center gap-2 shadow-lg w-full max-w-xl"
>
  <div className="flex-1 px-1 border-b md:border-b-0 md:border-r border-gray-200 ">
    <p className="text-xs text-teal-900 text-start">Destination</p>
    <input
      className="w-50 outline-none text-sm"
      placeholder="Where are you going?"
    />
  </div>

  <div className="flex-1 px-1 border-b md:border-b-0 md:border-r border-gray-200">
    <p className="text-xs text-start text-teal-900">Travel Dates</p>
    <input
      className="w-50 outline-none text-sm"
      placeholder="mm/dd/yyyy"
    />
  </div>

  <div className="flex-1 px-1 ">
    <p className="text-xs text-teal-900 text-start">Budget</p>
    <input
      className="w-full outline-none text-sm"
      placeholder="$1000 - $5000"
    />
  </div>

 <button className="bg-[#d14b30] text-white px-3 py-2 rounded-xl hover:scale-105 transition flex items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="20" y1="20" x2="16.65" y2="16.65" />
  </svg>
</button>
</div>
      </div>
    </div>
  );
};

export default Hero;
