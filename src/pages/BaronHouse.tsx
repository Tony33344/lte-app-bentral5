import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Utensils, Zap, Car, Dog, Star, ShieldCheck, Clock, VolumeX, Ban, GlassWater, Footprints, Info, Users, Bed, Bath, Lock, Flame, Sparkles, DoorOpen, Tv } from 'lucide-react';
import { BentralWidget } from '../components/BentralWidget';
import { useLightbox } from '../components/ImageLightbox';

export function BaronHouse() {
  const { open } = useLightbox();

  const galleryImages = [
    '/Baron/livingroom2.jpeg',
    '/Baron/sauna1.avif',
    '/Baron/bedroom1.jpeg',
    '/Baron/bathroom.jpg',
    '/Baron/sauna2.avif',
  ];

  const touchImages = [
    '/Baron/sparklingwinedetail.jpg',
    '/Baron/pilowdetail.jpg',
    '/Baron/gamesdetail.jpg',
    '/Baron/infomaribordetail.avif',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/Baron/livingroom1.jpeg)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <span className="inline-block bg-gold text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-8">Private & Intimate</span>
          <h1 className="font-display text-6xl md:text-8xl mb-6 leading-[0.9] text-shadow-lg">
            BARON HOUSE
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-shadow-md opacity-90 mb-12">
            Cosy one-bedroom retreat with private IR sauna, ambient lighting, and complete privacy
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
             <div className="flex items-center gap-2 text-lg">
               <Flame className="text-gold" /> <span>IR Sauna</span>
             </div>
             <div className="flex items-center gap-2 text-lg">
               <span className="text-gold font-bold">4</span> <span>Guests</span>
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
          <span className="text-primary font-medium">Baron House Apartment</span>
        </div>
      </div>

      {/* Self Check-in / Privacy Banner */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                <Lock size={32} className="text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Arrive on Your Own Terms</h3>
                <p className="text-white/70 text-sm max-w-md">Your keys are waiting in a secure keylocker. Check in anytime, no contact needed — enjoy complete privacy from the moment you arrive.</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20"></div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                <DoorOpen size={32} className="text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Private Entrance</h3>
                <p className="text-white/70 text-sm max-w-md">Your own separate entrance and mini terrace ensure full discretion. It's your private space — no shared hallways, no interruptions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif mb-8">Baron House Apartment</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                A warm, cosy one-bedroom apartment designed for comfort, privacy, and deep relaxation. Featuring a king-size bed, a bright living room with convertible sofa beds, and a private infrared sauna in a beautifully designed bathroom with floor heating and adjustable LED lighting. Natural green living walls, ambient lighting, and thoughtful design details invite you to slow down and recharge.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Flame size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Private IR Sauna</h4>
                    <p className="text-gray-500">Infrared sauna in the bathroom with floor heating, adjustable LED lighting, integrated music — a true spa-like atmosphere</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Ambient Wellness</h4>
                    <p className="text-gray-500">Adjustable bedroom lighting for every mood, virtual guided meditation, light and aroma therapy inside the sauna</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Lock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Total Privacy</h4>
                    <p className="text-gray-500">Private entrance, mini terrace, and keylocker self check-in — arrive anytime without needing to meet anyone</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-64 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/Baron/livingroom2.jpeg)' }} onClick={() => open('/Baron/livingroom2.jpeg', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/Baron/sauna1.avif)' }} onClick={() => open('/Baron/sauna1.avif', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/Baron/bedroom1.jpeg)' }} onClick={() => open('/Baron/bedroom1.jpeg', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/Baron/bathroom.jpg)' }} onClick={() => open('/Baron/bathroom.jpg', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/Baron/sauna2.avif)' }} onClick={() => open('/Baron/sauna2.avif', galleryImages)}></div>
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
               { icon: <Users />, title: "Capacity", desc: "Up to 4 Guests" },
               { icon: <Bed />, title: "1 Bedroom", desc: "King-size bed" },
               { icon: <Bath />, title: "1 Bathroom", desc: "Floor heating & LED" },
               { icon: <Flame />, title: "IR Sauna", desc: "Private infrared sauna" },
               { icon: <Utensils />, title: "Full Kitchen", desc: "Fully equipped" },
               { icon: <Wifi />, title: "High-Speed WiFi", desc: "Free throughout" },
               { icon: <Car />, title: "Free Parking", desc: "Private secure spot" },
               { icon: <Dog />, title: "Pet Friendly", desc: "All pets welcome" },
               { icon: <Tv />, title: "Cable TV", desc: "With ambient backlight" },
               { icon: <Zap />, title: "Air Conditioning", desc: "Climate control" },
               { icon: <Lock />, title: "Self Check-in", desc: "Keylocker — arrive anytime" },
               { icon: <Sparkles />, title: "Aroma Therapy", desc: "Inside sauna experience" },
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

      {/* Detail Images Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">The Details</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Thoughtful Touches</h2>
            <p className="text-gray-500 text-lg">Every detail is designed to make your stay special</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/Baron/sparklingwinedetail.jpg', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/Baron/sparklingwinedetail.jpg)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Welcome Sparkling</span>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/Baron/pilowdetail.jpg', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/Baron/pilowdetail.jpg)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Organic Pillows</span>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/Baron/gamesdetail.jpg', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/Baron/gamesdetail.jpg)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Board Games</span>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/Baron/infomaribordetail.avif', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/Baron/infomaribordetail.avif)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">Local Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section id="host" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="shrink-0">
               <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto lg:mx-0">
                  <img src="/jernej host.png" alt="Jernej" className="w-full h-full object-cover" />
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
                <li className="flex items-center gap-3"><Clock size={18} className="text-gold" /> Checkout: Before 11:00 AM</li>
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

      {/* Booking Section with Bentral Widget */}
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">Reserve Your Stay</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Book Baron House</h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12">
            <BentralWidget unitId="5f7a6b314d515f4e" />
          </div>
        </div>
      </section>
    </div>
  );
}
