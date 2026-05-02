import React from "react";

const RestaurantsSection = ({ countryName = "Egypt" }) => {
  const restaurants = [
    { id: 1, name: "Kanzel Restaurant & Lounge", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop", rating: 4.8, price: "$150", location: `Cairo, ${countryName}`, cuisine: "International" },
    { id: 2, name: "Indira Indian Restaurant - Holiday Inn Citystars", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop", rating: 4.6, price: "$120", location: `Cairo, ${countryName}`, cuisine: "Indian" },
    { id: 3, name: "Esca Cueva", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", rating: 4.7, price: "$180", location: `Cairo, ${countryName}`, cuisine: "Mediterranean" },
    { id: 4, name: "Rooftop 7000", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800", rating: 4.9, price: "$200", location: `Giza, ${countryName}`, cuisine: "Fine Dining" },
    { id: 5, name: "9 Pyramids Lounge", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800", rating: 4.8, price: "$160", location: `Giza, ${countryName}`, cuisine: "Egyptian" },
    { id: 6, name: "Gamal Sholqamy", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop", rating: 4.7, price: "$140", location: `Cairo, ${countryName}`, cuisine: "Traditional Egyptian" }
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-end mb-12" data-aos="fade-up">
          <div className="ml-4 md:ml-8">
            <h2 className="text-4xl font-bold text-gray-600 mb-2">Popular Restaurants</h2>
            <p className="text-xl text-gray-600">Exceptional dining experiences across {countryName}</p>
          </div>
          <button className="hidden md:flex items-center text-orange-600 text-xl hover:text-orange-700 hover:underline hover:cursor-pointer transition-colors">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={restaurant.id * 100}>
              <div className="relative h-64 overflow-hidden">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="font-semibold text-gray-800">{restaurant.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-2">{restaurant.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-sm">{restaurant.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <span className="text-sm">{restaurant.cuisine}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><span className="text-2xl font-bold text-orange-600">{restaurant.price}</span><span className="text-gray-500 text-sm">/person</span></div>
                  <button className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 hover:cursor-pointer transition-colors shadow-md hover:shadow-lg">Reserve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
            View All Restaurants
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};
export default RestaurantsSection;