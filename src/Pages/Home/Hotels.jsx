import React from "react";
import HotelCard from "../../Components/Card";
import Hotel from "../../assets/hotel 3.png";
import hotel2 from "../../assets/hotel 2.png";
import hotel3 from "../../assets/hotel 1.png";

function Hotels() {
  const hotels = [
    {
      id: 1,
      image: Hotel,
      title: "Azure Sands Resort",
      description: "Maldives • All-Inclusive Luxury",
      rating: "4.9",
      price: "850",
    },
    {
      id: 2,
      image: hotel2,
      title: "Peak View Lodge",
      description: "Swiss Alps • Mountain Retreat",
      rating: "4.0",
      price: "150",
    },
    {
      id: 3,
      image: hotel3,
      title: "The Urban Heirloom",
      description: "London • Boutique Historic",
      rating: "4.8",
      price: "550",
    },
    {
      id: 4,
      image: Hotel,
      title: "Azure Sands Resort",
      description: "Maldives • All-Inclusive Luxury",
      rating: "4.9",
      price: "850",
    },
    {
      id: 5,
      image: hotel2,
      title: "Peak View Lodge",
      description: "Swiss Alps • Mountain Retreat",
      rating: "4.0",
      price: "150",
    },
    {
      id: 6,
      image: hotel3,
      title: "The Urban Heirloom",
      description: "London • Boutique Historic",
      rating: "4.8",
      price: "550",
    },
  ];

  return (
    <div className="hotelSection bg-gray-100 py-10 md:py-20 w-full">
      
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8 md:mb-10">
        <h2 className="text-[#d14b30] font-bold text-2xl md:text-3xl">
          Popular Hotels
        </h2>
        <p className="text-sm md:text-base">
          Exceptional stays that redefine hospitality.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 place-items-center">
          
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl rounded-xl"
            >
              <HotelCard
                image={hotel.image}
                title={hotel.title}
                description={hotel.description}
                rating={hotel.rating}
                price={hotel.price}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Hotels;