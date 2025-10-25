import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Nuestros Programas', href: '#programas' },
  // { label: 'Aliados', href: '#aliados' },
  { label: 'Nuestro Equipo', href: '#equipo' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

      {/* Donate Button */}
      <a 
        href="https://www.paypal.com/paypalme/ungrano"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-flex bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 items-center justify-center gap-2 hover:shadow-lg active:scale-95"
      >
        Hacer una Donación
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
            <li className="px-6 pt-4">
              <a 
                href="https://www.paypal.com/paypalme/ungrano" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 w-full"
              >
                Hacer una Donación
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


