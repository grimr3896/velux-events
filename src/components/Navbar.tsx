import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ActivePage } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage, tab?: 'mission' | 'privacy' | 'terms') => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { label: string; value: ActivePage }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Discover', value: 'discover' },
    { label: 'About', value: 'about' },
  ];

  const handleLinkClick = (page: ActivePage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="velux-navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-6 md:px-12 flex items-center justify-between border-b border-white/[0.03] backdrop-blur-[2px]"
    >
      {/* Brand Logo */}
      <div
        onClick={() => handleLinkClick('home')}
        className="cursor-pointer font-display text-[24px] font-semibold text-luxury-primary tracking-[0.3em] uppercase select-none hover:text-luxury-gold transition-colors duration-300"
      >
        VELUX
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-12">
        {navLinks.map((link) => {
          const isActive = activePage === link.value;
          return (
            <button
              key={link.value}
              onClick={() => handleLinkClick(link.value)}
              className={`font-sans text-[12px] font-light tracking-[0.15em] uppercase transition-colors duration-300 ${
                isActive ? 'text-luxury-gold font-normal' : 'text-luxury-secondary hover:text-luxury-primary'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* Desktop Call to Action removed as per user request */}

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-luxury-primary hover:text-luxury-gold transition-colors p-1"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-luxury-bg z-40 flex flex-col justify-center items-center px-6 transition-all duration-500 ease-in-out">
          {/* Close button in top right */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-7 right-6 text-luxury-primary hover:text-luxury-gold transition-colors p-1"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Large Editorial Menu Items */}
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => {
              const isActive = activePage === link.value;
              return (
                <button
                  key={link.value}
                  onClick={() => handleLinkClick(link.value)}
                  className={`font-display text-[42px] font-light tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-luxury-gold italic' : 'text-luxury-primary hover:text-luxury-gold'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <button
              onClick={() => handleLinkClick('submit')}
              className="font-display text-[42px] font-light tracking-wide text-luxury-gold hover:text-luxury-gold-light italic pt-4 border-t border-luxury-border"
            >
              Promote Event
            </button>
          </div>

          {/* Mobile Footer brand tagline */}
          <div className="absolute bottom-12 text-center">
            <p className="font-display text-[18px] text-luxury-secondary font-light tracking-widest uppercase mb-2">
              VELUX
            </p>
            <p className="font-mono text-[10px] tracking-widest text-luxury-muted uppercase">
              The Art of Filling Seats · NYC
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
