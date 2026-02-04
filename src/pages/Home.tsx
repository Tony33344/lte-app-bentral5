import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Bath, Star, Crown, Car, Wifi, Tv, Utensils, Zap, Briefcase, Dog, Key, TreePine, Flame, ChevronRight, Check } from 'lucide-react';

export function Home() {
  const [activeTab, setActiveTab] = useState('bigopen');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/maribordrava.jpg)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-gold text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-8">Maribor Luxury Collection</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.9] text-shadow-lg">
            LTE <span className="text-gold">Apartments</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-shadow-md opacity-90 mb-12">
            Experience the pinnacle of comfort in our exclusive collection of premium apartments in the heart of Maribor
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/big-open" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all group">
                <span className="block text-xs uppercase tracking-widest text-gold mb-1">Best Seller</span>
                <span className="text-lg">Big Open</span>
             </Link>
             <Link to="/lte-high" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all group">
                <span className="block text-xs uppercase tracking-widest text-gold mb-1">Wellness</span>
                <span className="text-lg">LTE High</span>
             </Link>
             <Link to="/high-q" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all group">
                <span className="block text-xs uppercase tracking-widest text-gold mb-1">Premium</span>
                <span className="text-lg">High Q</span>
             </Link>
          </div>
        </div>
      </section>

      {/* Properties Showcase */}
      <section id="properties" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Discover Your Perfect Stay</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Each apartment is uniquely designed to provide an unforgettable experience in the heart of Maribor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Big Open */}
            <Link to="/big-open" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/bigopen/hero1.avif)' }}>
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Best Seller</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-4xl">€120 <span className="text-sm font-sans opacity-80">/ night</span></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">Big Open Apartment</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">Spacious 90m² luxury apartment with expansive terrace, private garden, and premium amenities</p>
                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={18} className="text-gold" /> 7 Guests
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed size={18} className="text-gold" /> 2 Beds
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath size={18} className="text-gold" /> 1 Bath
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Star size={16} className="text-gold fill-gold" />
                    <span>4.67 (209)</span>
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* LTE High */}
            <Link to="/lte-high" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/ltehigh/livingroom.jpg)' }}>
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Wellness</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-4xl">€100 <span className="text-sm font-sans opacity-80">/ night</span></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">LTE High Apartment</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">Unique high-ceiling apartment filled with positive energy. Open space concept with aerial yoga hammock</p>
                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={18} className="text-gold" /> 6 Guests
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed size={18} className="text-gold" /> 1 Bed
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath size={18} className="text-gold" /> 1.5 Bath
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Star size={16} className="text-gold fill-gold" />
                    <span>4.71 (163)</span>
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* High Q */}
            <Link to="/high-q" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/highun/living room.avif)' }}>
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Premium</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-4xl">€90 <span className="text-sm font-sans opacity-80">/ night</span></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">High Q Apartment</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">High-ceiling apartment near city center with designer kitchen, SMART TV, and outdoor terrace</p>
                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={18} className="text-gold" /> 6 Guests
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed size={18} className="text-gold" /> 2 Beds
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath size={18} className="text-gold" /> 1.5 Bath
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Star size={16} className="text-gold fill-gold" />
                    <span>4.53 (115)</span>
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Discover Maribor */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/garden.avif)' }}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="lg:pl-12">
              <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">The Destination</span>
              <h2 className="text-4xl md:text-5xl font-light mb-8">Discover Maribor</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Nestled between the lush green Pohorje Mountains and the sparkling Drava River, Maribor offers a perfect blend of natural beauty, rich history, and modern luxury.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                From the world's oldest vine to world-class skiing, Maribor is Slovenia's hidden gem waiting to be explored from the comfort of our luxury apartments.
              </p>
              <a href="https://www.visitmaribor.si/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                Explore Destination <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">Luxury Included</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Premium Amenities</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Every detail considered for your comfort and convenience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Utensils />, title: "Gourmet Kitchen", desc: "Fully equipped with premium appliances" },
              { icon: <Wifi />, title: "High-Speed WiFi", desc: "Ultra-fast internet throughout" },
              { icon: <Car />, title: "Free Parking", desc: "Private secure parking spaces" },
              { icon: <Tv />, title: "Premium Entertainment", desc: "Smart TV with streaming services" },
              { icon: <Zap />, title: "Air Conditioning", desc: "Climate control in every room" },
              { icon: <Briefcase />, title: "Workspace", desc: "Dedicated office area" },
              { icon: <Dog />, title: "Pet Friendly", desc: "Your furry friends welcome" },
              { icon: <Key />, title: "Self Check-in", desc: "24/7 keyless entry system" },
              { icon: <TreePine />, title: "Garden Access", desc: "Private outdoor spaces" },
              { icon: <Flame />, title: "BBQ Facilities", desc: "Professional grill area" },
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

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">Compare Properties</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Find Your Perfect Match</h2>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">Features</th>
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">Big Open Apartment</th>
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">LTE High Apartment</th>
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">High Q Apartment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                   { label: "Capacity", v1: "Up to 7+1 guests", v2: "Up to 6 guests", v3: "Up to 6 guests" },
                   { label: "Size", v1: "90m²", v2: "Open Space", v3: "High Ceiling" },
                   { label: "Bedrooms", v1: "2 bedrooms", v2: "1 bedroom", v3: "2 bedrooms" },
                   { label: "Outdoor Space", v1: "Large terrace + garden", v2: "Terrace", v3: "Outdoor terrace", check: true },
                   { label: "Yoga Hammock", v1: "-", v2: "Aerial yoga", v3: "-", check: true },
                   { label: "Smart TV", v1: "Cable TV", v2: "Netflix", v3: "HBO Max, Disney+", check: true },
                   { label: "Parking", v1: "Free private", v2: "Free private", v3: "Free private", check: true },
                   { label: "Pets Allowed", v1: "All pets", v2: "All pets", v3: "All pets", check: true },
                   { label: "Starting Rate", v1: "€120/night", v2: "€100/night", v3: "€90/night", bold: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-primary">{row.label}</td>
                    <td className="p-6 text-gray-600">
                      {row.check && row.v1 !== '-' && <Check size={16} className="inline text-gold mr-2" />}
                      <span className={row.bold ? 'font-bold text-primary text-lg' : ''}>{row.v1}</span>
                    </td>
                    <td className="p-6 text-gray-600">
                      {row.check && row.v2 !== '-' && <Check size={16} className="inline text-gold mr-2" />}
                      <span className={row.bold ? 'font-bold text-primary text-lg' : ''}>{row.v2}</span>
                    </td>
                    <td className="p-6 text-gray-600">
                      {row.check && row.v3 !== '-' && <Check size={16} className="inline text-gold mr-2" />}
                      <span className={row.bold ? 'font-bold text-primary text-lg' : ''}>{row.v3}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

       {/* Host Section */}
       <section id="host" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0 relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-lg">
                <img src="/jernej host.png" alt="Jernej" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-primary p-3 rounded-full shadow-lg">
                <Star size={24} className="fill-primary" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">Meet Your Host</span>
              <h3 className="text-3xl md:text-4xl font-serif mb-6">Hosted by Jernej</h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                   <Star size={14} className="text-gold fill-gold" /> 1,131 Reviews
                </span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                   <Crown size={14} className="text-gold" /> Superhost
                </span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                   <Users size={14} className="text-gold" /> 8 Years Hosting
                </span>
              </div>
              
              <p className="text-gray-500 leading-relaxed mb-8 italic text-lg">
                "Good vibes speak louder than words." I'm obsessed with breathwork, yoga, Pilates, and awareness. As your host, I'm dedicated to ensuring you have a perfect stay in Maribor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm text-gray-400">
                <span>Response rate: 97%</span>
                <span className="hidden sm:inline">•</span>
                <span>Responds within an hour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget Section Placeholder */}
      <section id="booking" className="py-24 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">Reserve Your Stay</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Book Your Luxury Experience</h2>
            <p className="text-white/70 text-lg">Check availability and secure your dates</p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 max-w-4xl mx-auto text-primary">
            <div className="flex flex-wrap gap-2 justify-center mb-8 bg-gray-100 p-2 rounded-xl inline-flex">
              <button 
                onClick={() => setActiveTab('bigopen')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'bigopen' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-primary'}`}
              >
                Big Open
              </button>
              <button 
                onClick={() => setActiveTab('ltehigh')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'ltehigh' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-primary'}`}
              >
                LTE High
              </button>
              <button 
                onClick={() => setActiveTab('highun')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'highun' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-primary'}`}
              >
                High Q
              </button>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-gray-50">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-gold">
                <Key size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Booking System Integration</h3>
              <p className="text-gray-500 mb-6">Bentral booking widget for {activeTab === 'bigopen' ? 'Big Open' : activeTab === 'ltehigh' ? 'LTE High' : 'High Q'} would appear here.</p>
              <button className="bg-gold text-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gold-light transition-colors">
                Proceed to Booking
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
