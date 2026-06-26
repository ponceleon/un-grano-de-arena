import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
  const t = getTranslations(lang);

  const basePath = lang === 'es' ? '/nosotros' : '/en/nosotros';

  const navItems: NavItem[] = [
    { label: t.nav.inicio, href: lang === 'es' ? '/' : '/en/' },
    { label: t.nav.sobreNosotros, href: `${basePath}#nosotros` },
    { label: t.nav.nuestrosProgramas, href: `${basePath}#programas` },
    { label: t.nav.nuestroEquipo, href: `${basePath}#equipo` },
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
      <div className="hidden lg:flex items-center gap-1">
        {(Object.entries(languages) as [Language, string][]).map(([code, name]) => (
          <button
            key={code}
            onClick={() => switchLanguage(code)}
            className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-colors ${
              code === lang
                ? 'bg-primary-700 text-white'
                : 'text-white/80 hover:text-white hover:bg-brown-700/30'
            }`}
            title={name}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

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
        <div className="lg:hidden absolute top-16 md:top-20 left-0 right-0 bg-white shadow-lg border-t">
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
              <div className="flex gap-2">
                {(Object.entries(languages) as [Language, string][]).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => {
                      switchLanguage(code);
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
          </ul>
        </div>
      )}
    </nav>
  );
}
