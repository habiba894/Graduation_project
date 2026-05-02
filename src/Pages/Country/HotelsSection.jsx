import React, { useState, useEffect } from "react";
import { countryService } from "../../services/api";

// 🖼️ خريطة الصور الحقيقية لكل فنادق الدول الثلاث
const hotelImages = {
  // 🇪🇬 مصر
  "Four Seasons Hotel Cairo": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
  "The Nile Ritz-Carlton": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
  "Marriott Mena House": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  
  // 🇫🇷 فرنسا
  "Four Seasons Hotel George V Paris": "https://images.unsplash.com/photo-1564511244442-85c96e64c8b5?w=800",
  "The Ritz Paris": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
  "Shangri-La Hotel Paris": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
  
  // 🇹🇷 تركيا
  "Four Seasons Hotel Istanbul at Sultanahmet": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
  "The Peninsula Istanbul": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
  "Raffles Istanbul": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
};

// 🏨 فنادق احتياطية لكل دولة (عشان تظهر لو الـ API قطع)
const fallbackByCountry = {
  egypt: [
    { id: 1, name: "Four Seasons Hotel Cairo", stars: 5, location: "Nile Corniche, Cairo", priceRange: "Premium", socialMediaLink: "#" },
    { id: 2, name: "The Nile Ritz-Carlton", stars: 5, location: "Nile Corniche, Cairo", priceRange: "Premium", socialMediaLink: "#" },
    { id: 3, name: "Marriott Mena House", stars: 5, location: "Pyramids Road, Giza", priceRange: "Premium", socialMediaLink: "#" },
  ],
  france: [
    { id: 1, name: "Four Seasons Hotel George V Paris", stars: 5, location: "31 Av. George V, Paris", priceRange: "Premium", socialMediaLink: "#" },
    { id: 2, name: "The Ritz Paris", stars: 5, location: "15 Place Vendôme, Paris", priceRange: "Premium", socialMediaLink: "#" },
    { id: 3, name: "Shangri-La Hotel Paris", stars: 5, location: "10 Av. d'Iéna, Paris", priceRange: "Premium", socialMediaLink: "#" },
  ],
  turkey: [
    { id: 1, name: "Four Seasons Hotel Istanbul at Sultanahmet", stars: 5, location: "Tevkifhane Sk. No:1, Istanbul", priceRange: "Premium", socialMediaLink: "#" },
    { id: 2, name: "The Peninsula Istanbul", stars: 5, location: "Kuruçeşme, Istanbul", priceRange: "Premium", socialMediaLink: "#" },
    { id: 3, name: "Raffles Istanbul", stars: 5, location: "Zorlu Center, Istanbul", priceRange: "Premium", socialMediaLink: "#" },
  ],
};

// 🖼️ صورة افتراضية عامة
const defaultHotelImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800";

const HotelsSection = ({ countryName = "Egypt" }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const countryParam = countryName.trim().toLowerCase();
        const res = await countryService.getHotels(countryParam);
        
        if (res.data && res.data.length > 0) {
          // ✅ لو الـ API نجح، نعرض بياناته
          const formattedHotels = res.data.map((hotel, index) => ({
            id: index + 1,
            name: hotel.name,
            image: hotel.photo,
            rating: hotel.stars,
            price: hotel.priceRange,
            location: hotel.location,
            socialMediaLink: hotel.socialMediaLink
          }));
          setHotels(formattedHotels);
        } else {
          // لو الـ API رجع فاضي، نستخدم الـ fallback حسب الدولة
          const key = countryParam;
          setHotels(fallbackByCountry[key] || fallbackByCountry.egypt);
        }
      } catch (err) {
        // لو الـ API فشل، نستخدم الـ fallback حسب الدولة
        const key = countryName.trim().toLowerCase();
        setHotels(fallbackByCountry[key] || fallbackByCountry.egypt);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [countryName]);

  // دالة تجيب الصورة الحقيقية للفندق
  const getHotelImage = (hotelName, apiImage) => {
    // 1. لو فيها صورة في الخريطة، استخدمها
    if (hotelImages[hotelName]) return hotelImages[hotelName];
    // 2. لو الـ API بعت صورة شغالة (مش example.com)، استخدمها
    if (apiImage && !apiImage.includes('example.com')) return apiImage;
    // 3. غير كده استخدم الصورة الافتراضية
    return defaultHotelImage;
  };

  return (
    <section className="bg-gray-50 w-full pt-8">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-end mb-12" data-aos="fade-up">
          <div className="ml-4 md:ml-8">
            <h2 className="text-4xl font-bold text-gray-600 mb-2">Popular Hotels</h2>
            <p className="text-xl text-gray-600">Exceptional stays that redefine hospitality in {countryName}</p>
          </div>
          <button className="hidden md:flex items-center text-orange-600 text-xl hover:text-orange-700 hover:underline hover:cursor-pointer transition-colors">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* حالة التحميل */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl h-96 animate-pulse shadow-lg"></div>
            ))}
          </div>
        )}

        {/* ✅ عرض الفنادق */}
        {!loading && hotels.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" 
                data-aos="fade-up" 
                data-aos-delay={hotel.id * 100}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* ✅ الصورة الحقيقية هنا */}
                  <img 
                    src={getHotelImage(hotel.name, hotel.image)}
                    alt={hotel.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.src = defaultHotelImage; }}
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-gray-800">{hotel.rating}.0</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-orange-600">{hotel.price}</span>
                      <span className="text-gray-500 text-sm">/night</span>
                    </div>
                    <a 
                      href={hotel.socialMediaLink || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 hover:cursor-pointer transition-colors shadow-md hover:shadow-lg"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HotelsSection;