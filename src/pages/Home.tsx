import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Bath, Star, Crown, Car, Wifi, Tv, Utensils, Zap, Briefcase, Dog, Key, TreePine, Flame, ChevronRight, Check, Lock, DoorOpen } from 'lucide-react';
import { BentralWidget } from '../components/BentralWidget';
import { useI18n } from '../i18n/context';

export function Home() {
  const [activeTab, setActiveTab] = useState('baron');
  const { t } = useI18n();

  const unitIds: Record<string, string> = {
    baron: '5f7a6b314d515f4e',
    bigopen: '5f7a6b314d675f4e',
    ltehigh: '5f7a6b314d775f4e',
    highun: '5f7a6b314e415f4e',
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/maribordrava.jpg)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/60 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-gold text-primary px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-8">{t.hero.badge}</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.9] text-shadow-lg">
            LTE <span className="text-gold">Apartments</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-shadow-md opacity-90 mb-12">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
             <Link to="/baron-house" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all group">
                <span className="block text-xs uppercase tracking-widest text-gold mb-1">{t.hero.baronLabel}</span>
                <span className="text-lg">Baron House</span>
             </Link>
             <Link to="/big-open" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all group">
                <span className="block text-xs uppercase tracking-widest text-gold mb-1">{t.hero.bigOpenLabel}</span>
                <span className="text-lg">Big Open</span>
             </Link>
             <Link to="/lte-high" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all group">
                <span className="block text-xs uppercase tracking-widest text-gold mb-1">{t.hero.lteHighLabel}</span>
                <span className="text-lg">LTE High</span>
             </Link>
             <Link to="/high-q" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all group">
                <span className="block text-xs uppercase tracking-widest text-gold mb-1">{t.hero.highQLabel}</span>
                <span className="text-lg">High Q</span>
             </Link>
          </div>
        </div>
      </section>

      {/* Properties Showcase */}
      <section id="properties" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.properties.badge}</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.properties.title}</h2>
            <p className="text-gray-500 text-lg leading-relaxed">{t.properties.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Baron House */}
            <Link to="/baron-house" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/Baron/livingroom1.jpeg)' }}>
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{t.hero.baronLabel}</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-4xl">€90 <span className="text-sm font-sans opacity-80">{t.properties.perNight}</span></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">Baron House</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">{t.properties.baronDesc}</p>
                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={18} className="text-gold" /> 4 {t.properties.guests}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed size={18} className="text-gold" /> 1 {t.properties.bed}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath size={18} className="text-gold" /> 1 {t.properties.bath}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Star size={16} className="text-gold fill-gold" />
                    <span>4.67 (349)</span>
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {t.properties.details} <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Big Open */}
            <Link to="/big-open" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/bigopen/hero1.avif)' }}>
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{t.hero.bigOpenLabel}</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-4xl">€120 <span className="text-sm font-sans opacity-80">{t.properties.perNight}</span></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">Big Open Apartment</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">{t.properties.bigOpenDesc}</p>
                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={18} className="text-gold" /> 7 {t.properties.guests}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed size={18} className="text-gold" /> 2 {t.properties.beds}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath size={18} className="text-gold" /> 1 {t.properties.bath}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Star size={16} className="text-gold fill-gold" />
                    <span>4.67 (209)</span>
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {t.properties.details} <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* LTE High */}
            <Link to="/lte-high" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/ltehigh/livingroom.jpg)' }}>
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{t.hero.lteHighLabel}</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-4xl">€100 <span className="text-sm font-sans opacity-80">{t.properties.perNight}</span></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">LTE High Apartment</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">{t.properties.lteHighDesc}</p>
                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={18} className="text-gold" /> 6 {t.properties.guests}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed size={18} className="text-gold" /> 1 {t.properties.bed}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath size={18} className="text-gold" /> 1.5 {t.properties.bath}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Star size={16} className="text-gold fill-gold" />
                    <span>4.71 (163)</span>
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {t.properties.details} <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* High Q */}
            <Link to="/high-q" className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-72 bg-cover bg-center" style={{ backgroundImage: 'url(/highun/living%20room.avif)' }}>
                <div className="absolute top-6 right-6 bg-gold text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{t.hero.highQLabel}</div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-display text-4xl">€90 <span className="text-sm font-sans opacity-80">{t.properties.perNight}</span></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">High Q Apartment</h3>
                <p className="text-gray-500 mb-6 line-clamp-2">{t.properties.highQDesc}</p>
                <div className="flex justify-between items-center py-6 border-t border-gray-100 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={18} className="text-gold" /> 6 {t.properties.guests}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed size={18} className="text-gold" /> 2 {t.properties.beds}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath size={18} className="text-gold" /> 1.5 {t.properties.bath}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-sm font-medium">
                    <Star size={16} className="text-gold fill-gold" />
                    <span>4.53 (115)</span>
                  </div>
                  <span className="text-primary font-medium text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    {t.properties.details} <ChevronRight size={16} />
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
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(/mariborwinter.jpg)' }}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="lg:pl-12">
              <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.maribor.badge}</span>
              <h2 className="text-4xl md:text-5xl font-light mb-8">{t.maribor.title}</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                {t.maribor.p1}
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {t.maribor.p2}
              </p>
              <a href="https://www.visitmaribor.si/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                {t.maribor.cta} <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.amenitiesSection.badge}</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.amenitiesSection.title}</h2>
            <p className="text-gray-500 text-lg leading-relaxed">{t.amenitiesSection.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Utensils />, title: t.amenitiesSection.kitchen, desc: t.amenitiesSection.kitchenDesc },
              { icon: <Wifi />, title: t.amenitiesSection.wifi, desc: t.amenitiesSection.wifiDesc },
              { icon: <Car />, title: t.amenitiesSection.parking, desc: t.amenitiesSection.parkingDesc },
              { icon: <Tv />, title: t.amenitiesSection.tv, desc: t.amenitiesSection.tvDesc },
              { icon: <Zap />, title: t.amenitiesSection.ac, desc: t.amenitiesSection.acDesc },
              { icon: <Briefcase />, title: t.amenitiesSection.workspace, desc: t.amenitiesSection.workspaceDesc },
              { icon: <Dog />, title: t.amenitiesSection.pets, desc: t.amenitiesSection.petsDesc },
              { icon: <Key />, title: t.amenitiesSection.checkin, desc: t.amenitiesSection.checkinDesc },
              { icon: <TreePine />, title: t.amenitiesSection.garden, desc: t.amenitiesSection.gardenDesc },
              { icon: <Flame />, title: t.amenitiesSection.bbq, desc: t.amenitiesSection.bbqDesc },
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
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.comparison.badge}</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.comparison.title}</h2>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100">
            <table className="w-full min-w-[900px] text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">{t.comparison.features}</th>
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">Baron House</th>
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">Big Open</th>
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">LTE High</th>
                  <th className="p-6 font-medium text-sm uppercase tracking-wider">High Q</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                   { label: "Style", v0: "Private & Intimate", v1: "Family Terrace", v2: "Playful Open Space", v3: "Business Comfort" },
                   { label: "Capacity", v0: "Up to 4 guests", v1: "Up to 7+1 guests", v2: "Up to 6 guests", v3: "Up to 5-6 guests" },
                   { label: "Bedrooms", v0: "1 bedroom", v1: "2 bedrooms", v2: "1 bedroom", v3: "2 bedrooms" },
                   { label: "IR Sauna", v0: "Private sauna", v1: "-", v2: "-", v3: "-", check: true },
                   { label: "Outdoor Space", v0: "Mini terrace", v1: "Large terrace + garden", v2: "Terrace", v3: "Outdoor terrace", check: true },
                   { label: "Yoga Hammock", v0: "-", v1: "-", v2: "Aerial yoga", v3: "-", check: true },
                   { label: "Smart TV", v0: "Cable TV", v1: "Cable TV", v2: "Netflix", v3: "HBO Max, Disney+", check: true },
                   { label: "Parking", v0: "Free private", v1: "Free private", v2: "Free private", v3: "Free private", check: true },
                   { label: "Pets Allowed", v0: "All pets", v1: "All pets", v2: "All pets", v3: "All pets", check: true },
                   { label: "Starting Rate", v0: "€90/night", v1: "€120/night", v2: "€100/night", v3: "€90/night", bold: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-primary">{row.label}</td>
                    <td className="p-6 text-gray-600">
                      {row.check && row.v0 !== '-' && <Check size={16} className="inline text-gold mr-2" />}
                      <span className={row.bold ? 'font-bold text-primary text-lg' : ''}>{row.v0}</span>
                    </td>
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

      {/* Keylocker / Privacy Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                <Lock size={36} className="text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2">{t.privacy.arriveTitle}</h3>
                <p className="text-white/70 max-w-md">{t.privacy.arriveDesc}</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-20 bg-white/20"></div>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center shrink-0">
                <DoorOpen size={36} className="text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2">{t.privacy.spaceTitle}</h3>
                <p className="text-white/70 max-w-md">{t.privacy.spaceDesc}</p>
              </div>
            </div>
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
              <span className="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">{t.hostSection.badge}</span>
              <h3 className="text-3xl md:text-4xl font-serif mb-6">{t.hostSection.title}</h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                   <Star size={14} className="text-gold fill-gold" /> 1,131 {t.hostSection.reviews}
                </span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                   <Crown size={14} className="text-gold" /> {t.hostSection.superhost}
                </span>
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                   <Users size={14} className="text-gold" /> 8 {t.hostSection.yearsHosting}
                </span>
              </div>
              
              <p className="text-gray-500 leading-relaxed mb-8 italic text-lg">
                {t.hostSection.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm text-gray-400">
                <span>{t.hostSection.responseRate}</span>
                <span className="hidden sm:inline">•</span>
                <span>{t.hostSection.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section id="booking" className="py-24 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="mb-16">
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm block mb-4">{t.booking.badge}</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">{t.booking.title}</h2>
            <p className="text-white/70 text-lg">{t.booking.subtitle}</p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 max-w-4xl mx-auto text-primary">
            <div className="flex flex-wrap gap-2 justify-center mb-8 bg-gray-100 p-2 rounded-xl inline-flex">
              <button 
                onClick={() => setActiveTab('baron')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${activeTab === 'baron' ? 'bg-white shadow-md text-primary' : 'text-gray-500 hover:text-primary'}`}
              >
                Baron House
              </button>
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

            <div className="rounded-xl min-h-[300px] bg-gray-50 p-4">
              <BentralWidget key={activeTab} unitId={unitIds[activeTab]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
