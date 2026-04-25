import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <div className="ctaSec bg-white"data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div className=" mx-20 my-30 p-20 rounded-2xl text-white bg-gradient-to-r from-[#EE5E44] to-[#1B6D7E] text-center">
          <h2 className="text-5xl! font-bold mb-6!">
            Ready to book your next horizon?
          </h2>

          <div className="flex justify-center gap-4">
            <button className="bg-[#1B6D7E] text-white px-5 py-4 rounded-full"data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              Start Planning My Trip
            </button>
            <button className="bg-[#EE5E44] px-5 py-4  rounded-full"data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              Contact a Concierge
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
