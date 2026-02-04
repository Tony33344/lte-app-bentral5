import React from 'react';
import { Link } from 'react-router-dom';
import { User, Award, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-display tracking-wider block">
            LTE <span className="text-gold">apartments</span>
          </Link>
          <p className="text-white/70 leading-relaxed text-sm">
            Experience the pinnacle of luxury accommodation in Maribor. Our exclusive collection of premium apartments offers unparalleled comfort, style, and convenience for the discerning traveler.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-sm text-white/90">
              <User size={18} className="text-gold" />
              <span>Hosted by Jernej</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-white/90">
              <Award size={18} className="text-gold" />
              <span>8 years hosting excellence</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-white/90">
              <Phone size={18} className="text-gold" />
              <span>24/7 guest support</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/#properties" className="text-white/70 hover:text-gold transition-colors text-sm">All Properties</Link>
            </li>
            <li>
              <Link to="/#comparison" className="text-white/70 hover:text-gold transition-colors text-sm">Compare</Link>
            </li>
            <li>
              <Link to="/#amenities" className="text-white/70 hover:text-gold transition-colors text-sm">Amenities</Link>
            </li>
            <li>
              <Link to="/#booking" className="text-white/70 hover:text-gold transition-colors text-sm">Book Now</Link>
            </li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h4 className="text-lg font-medium mb-6">Properties</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/big-open" className="text-white/70 hover:text-gold transition-colors text-sm">Big Open (7 guests)</Link>
            </li>
            <li>
              <Link to="/lte-high" className="text-white/70 hover:text-gold transition-colors text-sm">LTE High (6 guests)</Link>
            </li>
            <li>
              <Link to="/high-q" className="text-white/70 hover:text-gold transition-colors text-sm">High Q (6 guests)</Link>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-lg font-medium mb-6">Location</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>Maribor, Slovenia</span>
            </li>
            <li className="text-white/70 text-sm pl-8">5 min to city center</li>
            <li className="text-white/70 text-sm pl-8">15 min to Pohorje</li>
            <li className="text-white/70 text-sm pl-8">Near wine regions</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 text-center text-white/50 text-xs">
        <p>&copy; {new Date().getFullYear()} Maribor Luxury Collection. All rights reserved. | Crafted with excellence for our guests</p>
      </div>
    </footer>
  );
}
