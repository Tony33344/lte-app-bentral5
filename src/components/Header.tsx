import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useI18n, langLabels, type Lang } from '../i18n/context';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Determine if a link is active
  const isActive = (path: string) => {
    if (path.startsWith('#')) return false;
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-display tracking-wider text-primary no-underline z-50">
          LTE <span className="text-gold">apartments</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-8 items-center list-none">
          <li>
            <Link to="/" className="text-primary text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors relative group">
              {t.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/#properties" className="text-primary text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors relative group">
              {t.nav.properties}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
           <li>
            <Link to="/#amenities" className="text-primary text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors relative group">
              {t.nav.amenities}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/#host" className="text-primary text-sm font-medium uppercase tracking-widest hover:text-gold transition-colors relative group">
              {t.nav.host}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/#booking" className="bg-gold text-primary px-6 py-2 rounded-full font-semibold text-sm hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg">
              {t.nav.bookNow}
            </Link>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex bg-slate-100 p-1 rounded-full shadow-inner">
            <Link to="/big-open" className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${isActive('/big-open') ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}>
              Big Open
            </Link>
            <Link to="/lte-high" className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${isActive('/lte-high') ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}>
              LTE High
            </Link>
            <Link to="/high-q" className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${isActive('/high-q') ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}>
              High Q
            </Link>
            <Link to="/baron-house" className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${isActive('/baron-house') ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}>
              Baron
            </Link>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-500 hover:text-primary hover:bg-gray-100 transition-all"
            >
              <Globe size={14} />
              {langLabels[lang]}
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1 min-w-[80px] z-50">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${l === lang ? 'text-gold font-semibold' : 'text-gray-600'}`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <a href="#booking" className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-gold text-primary hover:bg-gold-light transition-all shadow-md hover:-translate-y-0.5">
            <Phone size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-50 p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <ul className="flex flex-col gap-6 items-center list-none p-0 text-center">
            <li>
              <Link to="/" onClick={toggleMobileMenu} className="text-2xl font-serif text-primary hover:text-gold transition-colors">{t.nav.home}</Link>
            </li>
            <li>
              <Link to="/#properties" onClick={toggleMobileMenu} className="text-2xl font-serif text-primary hover:text-gold transition-colors">{t.nav.properties}</Link>
            </li>
            <li>
              <Link to="/#amenities" onClick={toggleMobileMenu} className="text-2xl font-serif text-primary hover:text-gold transition-colors">{t.nav.amenities}</Link>
            </li>
            
            <li className="w-full h-px bg-gray-200 my-4"></li>
            
            <li>
              <Link to="/big-open" onClick={toggleMobileMenu} className="text-xl font-medium text-gray-600 hover:text-primary">Big Open Apartment</Link>
            </li>
            <li>
              <Link to="/lte-high" onClick={toggleMobileMenu} className="text-xl font-medium text-gray-600 hover:text-primary">LTE High Apartment</Link>
            </li>
            <li>
              <Link to="/high-q" onClick={toggleMobileMenu} className="text-xl font-medium text-gray-600 hover:text-primary">High Q Apartment</Link>
            </li>
            <li>
              <Link to="/baron-house" onClick={toggleMobileMenu} className="text-xl font-medium text-gray-600 hover:text-primary">Baron House</Link>
            </li>
            
            <li className="flex gap-3 mt-4">
              {(Object.keys(langLabels) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${l === lang ? 'bg-gold text-primary' : 'bg-gray-100 text-gray-600'}`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </li>
            
            <li className="mt-4">
              <Link to="/#booking" onClick={toggleMobileMenu} className="bg-gold text-primary px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gold-light hover:scale-105 transition-all inline-block">
                {t.nav.bookYourStay}
              </Link>
            </li>
            
            <li className="mt-2 flex flex-col items-center gap-2 text-sm text-gray-500">
              <a href="tel:+38651302206" className="hover:text-gold transition-colors">+386 51 302 206</a>
              <a href="mailto:jernej.babij@gmail.com" className="hover:text-gold transition-colors">jernej.babij@gmail.com</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
