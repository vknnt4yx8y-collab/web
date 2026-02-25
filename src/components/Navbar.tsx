import { useState } from 'react';
import { Flame, Menu, X } from 'lucide-react';
import { useScrollEffect } from '../hooks/useScrollEffect';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Wiki', href: '#wiki' },
  { label: 'Harita', href: '#map' },
  { label: 'Forum', href: '#forum' },
  { label: 'VIP', href: '#vip' },
  { label: 'Mağaza', href: '#store' },
  { label: 'Ayarlar', href: '#settings' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled
            ? 'bg-obsidian-dark/95 backdrop-blur-sm shadow-lg shadow-black/50 border-b border-crimson/20'
            : 'bg-transparent'
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <Flame
                className="w-8 h-8 text-ember group-hover:text-ember-bright transition-colors duration-300"
                style={{ filter: 'drop-shadow(0 0 8px #FF4500)' }}
              />
              <span className="text-xl font-black uppercase tracking-wider text-white group-hover:text-ember-light transition-colors duration-300">
                INFERNO
              </span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wide text-gray-300 hover:text-ember-light transition-colors duration-200 hover:drop-shadow-[0_0_8px_#FF6347] relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ember group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-ember transition-colors"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-40 w-72 bg-obsidian-dark border-l border-crimson/30
          transform transition-transform duration-300 ease-out md:hidden
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-crimson/20">
          <span className="text-lg font-black uppercase text-ember">Menu</span>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-base font-semibold uppercase tracking-wide text-gray-300 hover:text-ember-light hover:bg-obsidian-light rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
