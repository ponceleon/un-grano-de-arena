import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Nosotros',
    href: '/nosotros',
    children: [
      { label: 'El Equipo', href: '/nosotros/equipo' },
      { label: 'Aliados', href: '/nosotros/aliados' },
    ],
  },
  { label: 'Programas', href: '/programas' },
  { label: 'Recetario', href: '/recetario' },
  { label: 'Ponte Derecha', href: '/ponte-derecha' },
  { label: 'Informes', href: '/informes' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="flex items-center gap-4">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label} className="relative group">
            {item.children ? (
              <div>
                <button 
                  className="flex items-center gap-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a 
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Donate Button */}
      <a 
        href="/donar"
        className="hidden lg:inline-flex btn btn-primary btn-sm"
      >
        Donar
      </a>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full text-left px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <ul className="bg-gray-50">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block px-10 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="px-6 pt-4">
              <a href="/donar" className="btn btn-primary w-full">
                Donar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}


