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
  ];
  return (
    <>
      <div className="hotelSection bg-gray-100 py-20  w-full">
        <div className="titl text-left! mx-15 mb-10">
          <h2 className="text-black! font-bold! text-3xl! ">Popular Hotels</h2>
          <p>Exceptional stays that redefine hospitality.</p>
        </div>
        <div className="container mx-15 flex justify-center items-center  ">
          <div className="grid grid-cols-3 gap-10 w-full mx-auto  ">
            {hotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                image={hotel.image}
                title={hotel.title}
                description={hotel.description}
                rating={hotel.rating}
                price={hotel.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotels;
