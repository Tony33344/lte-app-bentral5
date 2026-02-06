import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Wifi, Utensils, TreePine, Zap, Car, Ticket, Dog, Star, ShieldCheck, Clock, VolumeX, Ban, GlassWater, Footprints, Info, Lock, DoorOpen } from 'lucide-react';
import { BentralWidget } from '../components/BentralWidget';
import { useLightbox } from '../components/ImageLightbox';
import { useI18n } from '../i18n/context';

export function HighQ() {
  const { open } = useLightbox();
  const { t } = useI18n();

  const galleryImages = [
    '/highun/livingroom%20mirror.jpg',
    '/highun/kitchen.avif',
    '/highun/bathroom.jpg',
    '/highun/bedroom2.avif',
    '/highun/garden.avif',
  ];

  const touchImages = [
    '/highun/kitchen%20details.jpg',
    '/highun/bedroom1b.avif',
    '/highun/kitchentablew2.avif',
    '/highun/livingroom%20all.jpg',
    '/highun/bedroom2b.avif',
    '/highun/kitchendetails2.avif',
    '/highun/bedroom2d.avif',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/highun/bedroom1.avif)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <span className="inline-block bg-gold text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-8">Premium Apartment</span>
          <h1 className="font-display text-6xl md:text-8xl mb-6 leading-[0.9] text-shadow-lg">
            HIGH Q
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-shadow-md opacity-90 mb-12">
            High-ceiling apartment near city center with designer kitchen, SMART TV, and outdoor terrace
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
             <div className="flex items-center gap-2 text-lg">
               <Tv className="text-gold" /> <span>HBO Max & Disney+</span>
             </div>
             <div className="flex items-center gap-2 text-lg">
               <span className="text-gold font-bold">6</span> <span>Guests</span>
             </div>
             <div className="flex items-center gap-2 text-lg">
               <Star className="text-gold fill-gold" /> <span>4.53 Rating</span>
             </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold transition-colors">{t.shared.home}</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-medium">High Q Apartment</span>
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
                <h3 className="text-xl font-medium mb-1">{t.privacy.arriveTitle}</h3>
                <p className="text-white/70 text-sm max-w-md">{t.privacy.arriveDescShort}</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20"></div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                <DoorOpen size={32} className="text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">{t.privacy.entranceTitle}</h3>
                <p className="text-white/70 text-sm max-w-md">{t.privacy.entranceDesc}</p>
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
              <h2 className="text-4xl font-serif mb-8">High Q Apartment</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Welcome to our high-ceiling apartment near the city center, offering self-check-in, adjustable lighting, and cozy bedrooms. Enjoy a designer kitchen, high-speed WiFi, SMART cable TV with premium channels, and an outdoor terrace. A market is just 50 steps away for your convenience.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Tv size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Premium Entertainment</h4>
                    <p className="text-gray-500">SMART TV with HBO Max, Disney+, premium cable channels, and high-speed WiFi</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Designer Kitchen</h4>
                    <p className="text-gray-500">Fully equipped modern kitchen with premium appliances and elegant finishes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Unbeatable Location</h4>
                    <p className="text-gray-500">50m to market, 200m to pizzeria, 1000m to supermarket, 5 min to city center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-64 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/highun/livingroom%20mirror.jpg)' }} onClick={() => open('/highun/livingroom%20mirror.jpg', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/highun/kitchen.avif)' }} onClick={() => open('/highun/kitchen.avif', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/highun/bathroom.jpg)' }} onClick={() => open('/highun/bathroom.jpg', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/highun/bedroom2.avif)' }} onClick={() => open('/highun/bedroom2.avif', galleryImages)}></div>
              <div className="h-48 bg-cover bg-center rounded-2xl shadow-lg cursor-pointer" style={{ backgroundImage: 'url(/highun/garden.avif)' }} onClick={() => open('/highun/garden.avif', galleryImages)}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.shared.luxuryIncluded}</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.shared.apartmentAmenities}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: <Tv />, title: t.highQ.tvTitle, desc: t.highQ.tvDesc },
               { icon: <Wifi />, title: t.baron.wifiTitle, desc: t.baron.wifiDesc },
               { icon: <Utensils />, title: t.highQ.kitchenTitle, desc: t.highQ.kitchenDesc },
               { icon: <TreePine />, title: t.highQ.terraceTitle, desc: t.highQ.terraceDesc },
               { icon: <Zap />, title: t.highQ.acTitle, desc: t.highQ.acDesc },
               { icon: <Car />, title: t.baron.parkingTitle, desc: t.baron.parkingDesc },
               { icon: <Ticket />, title: t.highQ.evTitle, desc: t.highQ.evDesc },
               { icon: <Dog />, title: t.baron.petsTitle, desc: t.baron.petsDesc },
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

      {/* Thoughtful Touches */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.shared.theDetails}</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.shared.thoughtfulTouches}</h2>
            <p className="text-gray-500 text-lg">{t.shared.touchesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/highun/kitchen%20details.jpg', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/kitchen%20details.jpg)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{t.highQ.designerDetails}</span>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/highun/bedroom1b.avif', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/bedroom1b.avif)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{t.highQ.restfulBedroom}</span>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/highun/kitchentablew2.avif', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/kitchentablew2.avif)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{t.highQ.diningKitchen}</span>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/highun/livingroom%20all.jpg', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/livingroom%20all.jpg)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{t.highQ.spaciousLiving}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/highun/bedroom2b.avif', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/bedroom2b.avif)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{t.highQ.cosySecond}</span>
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/highun/kitchendetails2.avif', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/kitchendetails2.avif)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{t.highQ.premiumAppliances}</span>
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => open('/highun/bedroom2d.avif', touchImages)}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: 'url(/highun/bedroom2d.avif)' }}></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <span className="absolute bottom-3 left-3 text-white text-sm font-medium">{t.highQ.softLighting}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section id="host" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="shrink-0">
               <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-xl mx-auto lg:mx-0">
                  <img src="/jernej host.png" alt="Jernej" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">{t.shared.meetHost}</span>
              <h3 className="text-3xl font-serif mb-6">{t.shared.hostedByJernej}</h3>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                 <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium"><Star size={16} className="text-gold fill-gold" /> 1,131 {t.hostSection.reviews}</span>
                 <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium"><ShieldCheck size={16} className="text-gold" /> 8 {t.hostSection.yearsHosting}</span>
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
                <Info className="text-gold" /> {t.shared.houseRules}
              </h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3"><Clock size={18} className="text-gold" /> {t.shared.checkIn}: After 4:00 PM</li>
                <li className="flex items-center gap-3"><Clock size={18} className="text-gold" /> {t.shared.checkOut}: Before 11:00 AM</li>
                <li className="flex items-center gap-3"><VolumeX size={18} className="text-gold" /> {t.shared.quietHours}: 11:00 PM - 7:00 AM</li>
                <li className="flex items-center gap-3"><Ban size={18} className="text-gold" /> {t.shared.noSmoking}</li>
                <li className="flex items-center gap-3"><GlassWater size={18} className="text-gold" /> {t.shared.noParties}</li>
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
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.shared.reserveStay}</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.booking.bookHighQ}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12">
            <BentralWidget unitId="5f7a6b314e415f4e" />
          </div>
        </div>
      </section>
    </div>
  );
}
