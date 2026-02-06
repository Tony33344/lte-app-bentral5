import React from 'react';
import { Link } from 'react-router-dom';
import { User, Award, Phone, MapPin, Mail } from 'lucide-react';
import { useI18n } from '../i18n/context';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-primary text-white pt-20 pb-8 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-display tracking-wider block">
            LTE <span className="text-gold">apartments</span>
          </Link>
          <p className="text-white/70 leading-relaxed text-sm">
            {t.footer.desc}
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-sm text-white/90">
              <User size={18} className="text-gold" />
              <span>{t.footer.hostedBy}</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-white/90">
              <Award size={18} className="text-gold" />
              <span>{t.footer.yearsExcellence}</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-white/90">
              <Phone size={18} className="text-gold" />
              <span>{t.footer.guestSupport}</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium mb-6">{t.footer.quickLinks}</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/#properties" className="text-white/70 hover:text-gold transition-colors text-sm">{t.footer.allProperties}</Link>
            </li>
            <li>
              <Link to="/#comparison" className="text-white/70 hover:text-gold transition-colors text-sm">{t.footer.compare}</Link>
            </li>
            <li>
              <Link to="/#amenities" className="text-white/70 hover:text-gold transition-colors text-sm">{t.nav.amenities}</Link>
            </li>
            <li>
              <Link to="/#booking" className="text-white/70 hover:text-gold transition-colors text-sm">{t.nav.bookNow}</Link>
            </li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h4 className="text-lg font-medium mb-6">{t.nav.properties}</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/baron-house" className="text-white/70 hover:text-gold transition-colors text-sm">Baron House (4 guests)</Link>
            </li>
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
          <h4 className="text-lg font-medium mb-6">{t.footer.location}</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <span>Maribor, Slovenia</span>
            </li>
            <li className="text-white/70 text-sm pl-8">{t.footer.toCityCenter}</li>
            <li className="text-white/70 text-sm pl-8">{t.footer.toPohorje}</li>
            <li className="text-white/70 text-sm pl-8">{t.footer.nearWine}</li>
          </ul>
          <ul className="space-y-3 mt-6">
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+38651302206" className="hover:text-gold transition-colors">+386 51 302 206</a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail size={16} className="text-gold shrink-0" />
              <a href="mailto:jernej.babij@gmail.com" className="hover:text-gold transition-colors">jernej.babij@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 text-center text-white/50 text-xs">
        <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
      </div>
    </footer>
  );
}
