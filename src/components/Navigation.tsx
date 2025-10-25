import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import type { Language } from '../i18n';
import { getTranslations, languages } from '../i18n';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  lang?: Language;
}

export default function Navigation({ lang = 'es' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = getTranslations(lang);

  const navItems: NavItem[] = [
    { label: t.nav.inicio, href: '#inicio' },
    { label: t.nav.sobreNosotros, href: '#nosotros' },
    { label: t.nav.nuestrosProgramas, href: '#programas' },
    { label: t.nav.nuestroEquipo, href: '#equipo' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const getCurrentPath = () => {
    if (typeof window !== 'undefined') {
      // Obtener la ruta actual sin el prefijo de idioma
      const path = window.location.pathname;
      const withoutLang = path.replace(/^\/(es|en)/, '');
      return withoutLang || '/';
    }
    return '/';
  };

  const switchLanguage = (newLang: Language) => {
    if (typeof window !== 'undefined') {
      const currentPath = getCurrentPath();
      const newPath = newLang === 'es' ? currentPath : `/${newLang}${currentPath}`;
      window.location.href = newPath;
    }
  };

  return (
    <nav className="flex items-center gap-4">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href}
              className="text-white hover:text-secondary-400 font-medium transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Language Switcher - Desktop */}
      <div className="hidden lg:block relative">
        <button
          onClick={() => setShowLangMenu(!showLangMenu)}
          className="flex items-center gap-2 text-white hover:text-secondary-400 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-brown-700/30"
          aria-label="Change language"
        >
          <Globe className="w-5 h-5" />
          <span className="uppercase">{lang}</span>
        </button>
        
        {showLangMenu && (
          <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[120px] z-50">
            {Object.entries(languages).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  switchLanguage(code as Language);
                  setShowLangMenu(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors ${
                  code === lang ? 'bg-primary-100 text-primary-600 font-semibold' : 'text-brown-600'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Donate Button */}
      <a 
        href="https://www.paypal.com/paypalme/ungrano"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 items-center justify-center gap-2 hover:shadow-lg active:scale-95"
      >
        {t.nav.donar}
      </a>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden p-2 text-white hover:text-secondary-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 md:top-24 left-0 right-0 bg-white shadow-lg border-t">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="block px-6 py-3 text-brown-500 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* Language Switcher - Mobile */}
            <li className="px-6 py-3 border-t border-gray-200 mt-2">
              <div className="flex items-center gap-2 mb-2 text-brown-600 font-semibold">
                <Globe className="w-5 h-5" />
                <span>{lang === 'es' ? 'Idioma' : 'Language'}</span>
              </div>
              <div className="flex gap-2">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      switchLanguage(code as Language);
                      toggleMenu();
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      code === lang
                        ? 'bg-primary-500 text-brown-800'
                        : 'bg-gray-100 text-brown-600 hover:bg-gray-200'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </li>
            
            <li className="px-6 pt-4">
              <a 
                href="https://www.paypal.com/paypalme/ungrano" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 w-full"
              >
                {t.nav.donar}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
