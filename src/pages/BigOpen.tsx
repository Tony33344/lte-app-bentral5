import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Wifi, Utensils, TreePine, Zap, Car, Dog, Star, ShieldCheck, Clock, VolumeX, Ban, GlassWater, Footprints, Info, Users, Bed, Bath, Crown, Leaf } from 'lucide-react';

export function BigOpen() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/images/bigopen/hero1.avif)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <span className="inline-block bg-gold text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-8">Best Seller</span>
          <h1 className="font-display text-6xl md:text-8xl mb-6 leading-[0.9] text-shadow-lg">
            BIG OPEN
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-shadow-md opacity-90 mb-12">
            Spacious 90m² luxury apartment with expansive terrace and private garden
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
             <div className="flex items-center gap-2 text-lg">
               <Crown className="text-gold" /> <span>Luxury Living</span>
             </div>
             <div className="flex items-center gap-2 text-lg">
               <span className="text-gold font-bold">7+1</span> <span>Guests</span>
             </div>
             <div className="flex items-center gap-2 text-lg">
               <Star className="text-gold fill-gold" /> <span>4.67 Rating</span>
             </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-medium">Big Open Apartment</span>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif mb-8">Big Open Apartment</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Experience unparalleled luxury in our flagship 90m² apartment, meticulously designed for up to 7+1 guests. This expansive residence features a magnificent terrace with professional BBQ facilities, a private garden oasis, and children's playground - perfect for families and groups seeking the ultimate Maribor experience.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Crown size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Premium Comfort</h4>
                    <p className="text-gray-500">36cm high diamond 7-zone orthopedic mattress (€1600 value) ensuring your best rest</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Private Oasis</h4>
                    <p className="text-gray-500">Expansive terrace with BBQ grill, self-catering garden, and children's playground</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Car size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Convenience First</h4>
                    <p className="text-gray-500">Free private parking, private entrance, self check-in, and just 5 minutes to city center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-64 bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: 'url(/images/bigopen/hero2.avif)' }}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: 'url(/images/bigopen/hero3.avif)' }}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: 'url(/images/bigopen/hero4.avif)' }}></div>
              <div className="col-span-2 h-64 bg-cover bg-center rounded-2xl shadow-lg" style={{ backgroundImage: 'url(/images/bigopen/hero garden.avif)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">Luxury Included</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Apartment Amenities</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Users />, title: "Capacity", desc: "Up to 7 Guests" },
               { icon: <Bed />, title: "2 Bedrooms", desc: "Orthopedic mattresses" },
               { icon: <Bath />, title: "1 Bathroom", desc: "Premium fixtures" },
               { icon: <TreePine />, title: "Private Garden", desc: "With BBQ & Playground" },
               { icon: <Utensils />, title: "Full Kitchen", desc: "Dishwasher & Oven" },
               { icon: <Wifi />, title: "High-Speed WiFi", desc: "Free throughout" },
               { icon: <Car />, title: "Free Parking", desc: "Private secure spot" },
               { icon: <Dog />, title: "Pet Friendly", desc: "All pets welcome" },
             ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full text-gold shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section id="host" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="shrink-0">
               <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto lg:mx-0">
                  <img src="/images/jernej host.png" alt="Jernej" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">Meet Your Host</span>
              <h3 className="text-3xl font-serif mb-6">Hosted by Jernej</h3>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                 <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium"><Star size={16} className="text-gold fill-gold" /> 1,131 Reviews</span>
                 <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium"><ShieldCheck size={16} className="text-gold" /> 8 Years Hosting</span>
              </div>
              
              <p className="text-gray-500 text-lg leading-relaxed mb-6 italic">
                "Good vibes speak louder than words." I'm obsessed with breathwork, yoga, Pilates, and awareness. Jernej is highly rated for great communication and provides a seamless self-check-in experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* House Rules */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
              <h4 className="text-xl font-medium mb-6 flex items-center gap-2">
                <Info className="text-gold" /> House Rules
              </h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3"><Clock size={18} className="text-gold" /> Check-in: After 4:00 PM</li>
                <li className="flex items-center gap-3"><Clock size={18} className="text-gold" /> Checkout: Before 10:00 AM</li>
                <li className="flex items-center gap-3"><VolumeX size={18} className="text-gold" /> Quiet hours: 11:00 PM - 7:00 AM</li>
                <li className="flex items-center gap-3"><Ban size={18} className="text-gold" /> No smoking</li>
                <li className="flex items-center gap-3"><GlassWater size={18} className="text-gold" /> No parties or events</li>
                <li className="flex items-center gap-3"><Footprints size={18} className="text-gold" /> No shoes inside the house</li>
              </ul>
            </div>

            {/* Safety & Tax */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
              <h4 className="text-xl font-medium mb-6 flex items-center gap-2">
                <ShieldCheck className="text-gold" /> Safety & Details
              </h4>
              <ul className="space-y-4 text-gray-600 mb-6">
                <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-gold" /> Carbon monoxide & Smoke alarm</li>
                <li className="flex items-center gap-3"><Car size={18} className="text-gold" /> Free parking on premises</li>
              </ul>
              
              <div className="bg-gold/10 p-6 rounded-2xl border-l-4 border-gold">
                <strong className="block text-primary mb-2 text-sm uppercase tracking-wide">Tourist Tax (Maribor)</strong>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Adults: 2.50€ /night/guest</li>
                  <li>• 7-18 years: 1.25€ /night/guest</li>
                  <li>• Under 7 years: Free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Placeholder */}
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">Reserve Your Stay</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Book Big Open Apartment</h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-16 text-center">
             <h3 className="text-2xl font-medium mb-4">Booking Widget</h3>
             <p className="text-gray-500 mb-8">Calendar and availability check for Big Open Apartment would appear here.</p>
             <button className="bg-gold text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gold-light transition-colors">
                Check Availability
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
