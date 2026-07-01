import React, { useState } from 'react';
import { EventItem, ActivePage } from '../types';
import { EVENTS_DATA, TESTIMONIALS_DATA } from '../data';
import EventCard from './EventCard';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onSelectEvent: (eventId: string) => void;
}

export default function HomePage({ onNavigate, onSelectEvent }: HomePageProps) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter events according to requirements
  const featuredEvent = EVENTS_DATA.find((e) => e.id === 'taco-tequila-fiesta') || EVENTS_DATA[0];
  const secondaryFeatured = EVENTS_DATA.filter(
    (e) => e.id === 'ai-skills-workshop' || e.id === 'africatech-2025'
  );
  const trendingEvents = EVENTS_DATA.filter((e) => e.isTrending);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div id="homepage-container" className="w-full">
      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="min-h-screen flex flex-col justify-between pt-32 pb-16 relative overflow-hidden"
      >
        {/* Background Image with elegant gradient mask */}
        <div 
          className="absolute inset-0 z-0 opacity-100 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/736x/62/04/39/62043923ae26886918c568320c73c778.jpg")',
          }}
        />
        {/* Lighter gradient overlay to ensure text is highly legible but the background is fully visible and beautiful */}
        <div 
          className="absolute inset-0 z-0 bg-black/40"
          style={{
            background: 'linear-gradient(to bottom, rgba(8, 8, 12, 0.2) 0%, rgba(8, 8, 12, 0.4) 60%, #08080C 100%)',
          }}
        />

        <div className="flex-1 flex flex-col justify-center items-center px-6 max-w-5xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase mb-8 block animate-fade-in">
            THE PREMIER EVENT PROMOTION PLATFORM
          </span>

          {/* Headline */}
          <h1 className="font-display font-light text-[60px] sm:text-[80px] md:text-[96px] leading-[1.05] tracking-tight text-luxury-primary mb-8 max-w-4xl">
            <span className="block">We Fill</span>
            <span className="block italic text-luxury-gold-light font-light my-2">Every Seat.</span>
            <span className="block text-[44px] sm:text-[54px] md:text-[64px] tracking-wide mt-4 opacity-90 font-light">
              Every Time.
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-sans text-[15px] sm:text-[16px] text-luxury-secondary max-w-[480px] leading-relaxed font-light mb-12">
            VELUX partners with event organizers across the United States to promote, advertise, and fill their events with the right audience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('discover')}
              className="w-full sm:w-auto border border-luxury-gold text-luxury-gold bg-transparent px-10 py-4 text-[12px] tracking-[0.12em] font-sans font-medium uppercase rounded-[2px] transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-bg hover:shadow-[0_0_20px_rgba(184,151,58,0.25)] cursor-pointer"
            >
              EXPLORE EVENTS
            </button>
          </div>
        </div>


      </section>

      {/* FEATURED EVENTS */}
      <section id="featured-section" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="border-b border-luxury-border pb-6 mb-12 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold">
            / FEATURED EVENTS
          </span>
          <button
            onClick={() => onNavigate('discover')}
            className="font-mono text-[11px] tracking-[0.12em] text-luxury-secondary uppercase hover:text-luxury-gold transition-colors"
          >
            VIEW ALL →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large main card (55%) */}
          <div className="lg:col-span-7 h-full">
            <EventCard event={featuredEvent} onClick={onSelectEvent} variant="large" />
          </div>

          {/* Two smaller stacked cards (42%) */}
          <div className="lg:col-span-5 flex flex-col gap-8 h-full justify-between">
            {secondaryFeatured.map((event) => (
              <div key={event.id} className="flex-1">
                <EventCard event={event} onClick={onSelectEvent} variant="default" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING THIS WEEK */}
      <section id="trending-section" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-luxury-border">
        <div className="pb-6 mb-12 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold">
            / TRENDING THIS WEEK
          </span>
          <div className="hidden sm:flex space-x-2 text-luxury-secondary font-mono text-[11px]">
            <span>SWIPE TO EXPLORE</span>
            <span>→</span>
          </div>
        </div>

        {/* Horizontal scroll row */}
        <div className="flex space-x-6 overflow-x-auto pb-6 -mx-6 px-6 scrollbar-none snap-x snap-mandatory">
          {trendingEvents.map((event) => (
            <div key={event.id} className="min-w-[290px] sm:min-w-[340px] max-w-[380px] snap-start flex-shrink-0">
              <EventCard event={event} onClick={onSelectEvent} variant="compact" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY VELUX */}
      <section id="why-velux-section" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-luxury-border">
        <div className="pb-6 mb-16">
          <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold">
            / WHY VELUX
          </span>
        </div>

        {/* 3-column stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="font-display text-[64px] text-luxury-gold font-light mb-2">500+</div>
            <div className="font-sans text-[13px] font-medium tracking-wide text-luxury-primary uppercase mb-3">
              Events Promoted
            </div>
            <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
              Curating premier lifestyle, technical summits, and culinary arts across major cultural cities.
            </p>
          </div>
          <div>
            <div className="font-display text-[64px] text-luxury-gold font-light mb-2">50K+</div>
            <div className="font-sans text-[13px] font-medium tracking-wide text-luxury-primary uppercase mb-3">
              Monthly Visitors
            </div>
            <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
              Discerning patrons looking for exclusive gatherings, premium lifestyle events, and executive masterclasses.
            </p>
          </div>
          <div>
            <div className="font-display text-[64px] text-luxury-gold font-light mb-2">12</div>
            <div className="font-sans text-[13px] font-medium tracking-wide text-luxury-primary uppercase mb-3">
              Cities Covered
            </div>
            <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
              Scaling robust event promotion across New York, Los Angeles, San Francisco, Chicago, Miami, Seattle, and beyond.
            </p>
          </div>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-luxury-surface border border-luxury-border p-8 rounded-[2px] transition-colors duration-300 hover:border-luxury-gold">
            <h4 className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase mb-4 font-semibold">
              PREMIUM PLACEMENT
            </h4>
            <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
              Your listings are showcased inside a meticulously designed editorial layout, preserving brand equity and luxury status.
            </p>
          </div>
          <div className="bg-luxury-surface border border-luxury-border p-8 rounded-[2px] transition-colors duration-300 hover:border-luxury-gold">
            <h4 className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase mb-4 font-semibold">
              CURATED AUDIENCE
            </h4>
            <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
              Skip the mass bulletin chaos. Our channels target high-net-worth individuals, tech executives, and lifestyle tastemakers.
            </p>
          </div>
          <div className="bg-luxury-surface border border-luxury-border p-8 rounded-[2px] transition-colors duration-300 hover:border-luxury-gold">
            <h4 className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase mb-4 font-semibold">
              MEASURABLE RESULTS
            </h4>
            <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
              Acquire valuable high-resolution demography insights, page view telemetry, and high-fidelity conversion details.
            </p>
          </div>
        </div>
      </section>

      {/* FOR ORGANIZERS BANNER */}
      <section id="organizers-banner" className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-luxury-surface border-l-[3px] border-luxury-gold p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 rounded-[2px]">
          <div>
            <h3 className="font-display font-light italic text-[36px] md:text-[48px] text-luxury-primary leading-tight mb-4 max-w-2xl">
              "Your event deserves more than a Facebook post."
            </h3>
            <p className="font-sans text-[15px] text-luxury-secondary font-light">
              Submit to VELUX. Reach thousands. Fill seats.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={() => onNavigate('submit')}
              className="border border-luxury-gold text-luxury-gold bg-transparent px-8 py-4 text-[12px] tracking-[0.1em] font-sans uppercase rounded-[2px] transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-bg cursor-pointer text-center"
            >
              SUBMIT YOUR EVENT
            </button>
            <button
              onClick={() => onNavigate('submit')}
              className="border border-white/10 text-luxury-primary bg-transparent px-8 py-4 text-[12px] tracking-[0.1em] font-sans uppercase rounded-[2px] transition-all duration-300 hover:border-white/30 cursor-pointer text-center"
            >
              VIEW PACKAGES
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials-section" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-luxury-border">
        <div className="pb-6 mb-16">
          <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold">
            / VERIFIED ORGANIZER JOURNAL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-luxury-surface border border-luxury-border p-8 rounded-[2px] flex flex-col justify-between h-full hover:border-luxury-gold/55 transition-colors duration-300"
            >
              {/* Quote icon / mark */}
              <div>
                <span className="font-display text-[64px] text-luxury-gold/10 leading-[0.1] block h-8">
                  “
                </span>
                <p className="font-display italic text-[20px] leading-relaxed text-luxury-primary mb-8 font-light">
                  {t.quote}
                </p>
              </div>

              {/* Author & circle initials */}
              <div className="flex items-center space-x-4 border-t border-white/[0.03] pt-6 mt-4">
                <div className="w-10 h-10 rounded-full border border-luxury-gold flex items-center justify-center bg-luxury-bg">
                  <span className="font-mono text-[12px] tracking-wider text-luxury-gold font-medium">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <h5 className="font-sans text-[13px] text-luxury-primary font-medium">{t.author}</h5>
                  <p className="font-sans text-[11px] text-luxury-secondary font-light">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-luxury-border">
        <h2 className="font-display font-light text-[40px] md:text-[48px] text-luxury-primary mb-3">
          Be First to Know.
        </h2>
        <p className="font-display italic text-[18px] text-luxury-gold-light font-light mb-10">
          Weekly event picks, before they sell out.
        </p>

        {subscribed ? (
          <div className="bg-luxury-surface border border-luxury-gold py-6 px-8 inline-block max-w-md rounded-[2px] transition-all duration-500">
            <p className="font-display italic text-[20px] text-luxury-primary">
              Your enrollment is registered.
            </p>
            <p className="font-sans text-[13px] text-luxury-secondary font-light mt-2">
              Welcome to the weekly dispatch. Expect curated picks on Thursday afternoons.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-luxury-surface border border-white/10 text-luxury-primary font-sans text-[14px] px-5 py-4 flex-1 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
            />
            <button
              type="submit"
              className="bg-luxury-gold text-luxury-bg border border-luxury-gold font-sans text-[12px] font-medium tracking-[0.1em] uppercase px-8 py-4 rounded-[2px] cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-luxury-gold"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
