import React from 'react';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage, tab?: 'mission' | 'privacy' | 'terms') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      id="velux-footer"
      className="bg-luxury-bg border-t border-luxury-border pt-20 pb-10 px-6 md:px-12 mt-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand & Tagline */}
        <div className="md:pr-8">
          <h2
            onClick={() => onNavigate('home')}
            className="font-display text-[26px] font-semibold text-luxury-primary tracking-[0.25em] uppercase cursor-pointer hover:text-luxury-gold transition-colors mb-4"
          >
            VELUX
          </h2>
          <p className="font-sans text-[13px] text-luxury-secondary leading-relaxed mb-6 font-light">
            An elite editorial promotion platform pairing premium event organizers with discerning audiences across the United States.
          </p>
          <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-muted uppercase block">
            New York, USA
          </span>
        </div>

        {/* Column 2: Discover */}
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.12em] text-luxury-gold uppercase mb-6 font-semibold">
            Discover
          </h4>
          <ul className="space-y-3 font-sans text-[13px] text-luxury-secondary font-light">
            <li>
              <button
                onClick={() => onNavigate('discover')}
                className="hover:text-luxury-gold transition-colors text-left"
              >
                All Curated Events
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-luxury-gold transition-colors text-left"
              >
                Categories Index
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-luxury-gold transition-colors text-left"
              >
                Trending This Week
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-luxury-gold transition-colors text-left"
              >
                Featured Highlights
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Organizers */}
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.12em] text-luxury-gold uppercase mb-6 font-semibold">
            Organizers
          </h4>
          <ul className="space-y-3 font-sans text-[13px] text-luxury-secondary font-light">
            <li>
              <button
                onClick={() => onNavigate('submit')}
                className="hover:text-luxury-gold transition-colors text-left"
              >
                Submit New Event
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('submit')}
                className="hover:text-luxury-gold transition-colors text-left"
              >
                Promotion Packages
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-luxury-gold transition-colors text-left"
              >
                How We Fill Seats
              </button>
            </li>
            <li>
              <a
                href="#organizers-banner"
                className="hover:text-luxury-gold transition-colors text-left"
              >
                Partnerships Inquiry
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="font-mono text-[11px] tracking-[0.12em] text-luxury-gold uppercase mb-6 font-semibold">
            Company
          </h4>
          <ul className="space-y-3 font-sans text-[13px] text-luxury-secondary font-light">
            <li>
              <button
                onClick={() => onNavigate('about', 'mission')}
                className="hover:text-luxury-gold transition-colors text-left cursor-pointer"
              >
                About Our Mission
              </button>
            </li>
            <li>
              <a href="mailto:info@velux.luxury" className="hover:text-luxury-gold transition-colors block cursor-pointer">
                Contact Concierge
              </a>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about', 'privacy')}
                className="hover:text-luxury-gold transition-colors text-left cursor-pointer"
              >
                Privacy Protocol
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about', 'terms')}
                className="hover:text-luxury-gold transition-colors text-left cursor-pointer"
              >
                Terms of Placement
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.03] pt-6 font-sans text-[12px] text-luxury-muted">
        <div className="mb-3 sm:mb-0">
          <span>&copy; {new Date().getFullYear()} VELUX Luxury Promotion. Crafted in the USA.</span>
        </div>
        <div className="flex space-x-6">
          <button onClick={() => onNavigate('about', 'privacy')} className="hover:text-luxury-gold transition-colors cursor-pointer">
            Privacy Policy
          </button>
          <span>·</span>
          <button onClick={() => onNavigate('about', 'terms')} className="hover:text-luxury-gold transition-colors cursor-pointer">
            Terms of Use
          </button>
        </div>
      </div>
    </footer>
  );
}
