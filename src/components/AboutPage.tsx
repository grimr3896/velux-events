import React from 'react';
import { ActivePage } from '../types';

interface AboutPageProps {
  onNavigate: (page: ActivePage, tab?: 'mission' | 'privacy' | 'terms') => void;
  activeTab: 'mission' | 'privacy' | 'terms';
  onChangeTab: (tab: 'mission' | 'privacy' | 'terms') => void;
}

export default function AboutPage({ onNavigate, activeTab, onChangeTab }: AboutPageProps) {
  const steps = [
    {
      num: '01',
      title: 'Submit Specifications',
      description: 'Detail your curated agenda, venue scheduling, price points, and target demographic through our concierge portal.',
    },
    {
      num: '02',
      title: 'Editorial Verification',
      description: 'Our team evaluates the brand alignment of your listing to guarantee catalog integrity within 24 hours.',
    },
    {
      num: '03',
      title: 'Algorithmic Boost',
      description: 'Your event goes live, immediately synchronized to our hero tickers, category feeds, and email newsletters.',
    },
    {
      num: '04',
      title: 'Maximum Turnout',
      description: 'Observe high-resolution conversions, ticketing transactions, and a fully sold-out schedule on schedule day.',
    },
  ];

  const tabs: { id: 'mission' | 'privacy' | 'terms'; label: string }[] = [
    { id: 'mission', label: 'OUR MISSION' },
    { id: 'privacy', label: 'PRIVACY PROTOCOL' },
    { id: 'terms', label: 'TERMS OF PLACEMENT' },
  ];

  return (
    <div id="about-page-container" className="pt-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Hero Editorial Headline */}
      <section className="py-16 text-center max-w-4xl mx-auto">
        <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase block mb-6 animate-fade-in">
          / {activeTab === 'mission' ? 'ABOUT VELUX' : activeTab === 'privacy' ? 'DATA SECURITY' : 'REGULATORY CODE'}
        </span>
        <h1 className="font-display font-light text-[44px] sm:text-[64px] md:text-[72px] text-luxury-primary leading-none tracking-tight">
          {activeTab === 'mission' && (
            <>
              We Don't Just List Events.
              <span className="block italic text-luxury-gold font-light mt-4">We Fill Them.</span>
            </>
          )}
          {activeTab === 'privacy' && (
            <>
              Information Security.
              <span className="block italic text-luxury-gold font-light mt-4">Fully Guaranteed.</span>
            </>
          )}
          {activeTab === 'terms' && (
            <>
              Vetting Standards.
              <span className="block italic text-luxury-gold font-light mt-4">Prestige Preserved.</span>
            </>
          )}
        </h1>
      </section>

      {/* Elegant Tab Switcher */}
      <div className="flex justify-center border-b border-luxury-border mb-16">
        <div className="flex gap-8 md:gap-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`pb-4 text-[11px] tracking-[0.18em] font-mono font-medium transition-all duration-300 relative uppercase cursor-pointer ${
                activeTab === tab.id
                  ? 'text-luxury-gold font-semibold'
                  : 'text-luxury-secondary hover:text-luxury-primary'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-luxury-gold shadow-[0_0_8px_rgba(184,151,58,0.4)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Contents */}
      <div className="transition-all duration-300">
        {activeTab === 'mission' && (
          <div className="animate-fade-in">
            {/* Editorial Copy */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 border-t border-b border-luxury-border">
              <p className="font-sans text-[15px] sm:text-[16px] text-luxury-secondary font-light leading-relaxed">
                VELUX was founded in New York City with a singular mission: to restore prestige and editorial curation to the event discovery landscape. In an era dominated by chaotic SaaS bulletins and mass-audience algorithms, we choose the path of deliberate curation, editorial design, and elevated visibility.
              </p>
              <p className="font-sans text-[15px] sm:text-[16px] text-luxury-secondary font-light leading-relaxed">
                We believe that a premium event is more than a transaction; it is a cultural artifact, a technical frontier, or a refined sensory experience. Therefore, we present every listing inside a world-class editorial aesthetic, ensuring that your brand equity is preserved and celebrated.
              </p>
              <p className="font-sans text-[15px] sm:text-[16px] text-luxury-secondary font-light leading-relaxed">
                Whether we are promoting an executive tech summit in San Francisco, an intimate sunset rooftop session in Los Angeles, or a high-end food festival on Miami’s coast, we connect premium event organizers with North America's most discerning, high-intent audiences.
              </p>
            </section>

            {/* Stats Row */}
            <section className="py-24 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-display text-[54px] sm:text-[64px] text-luxury-gold font-light mb-1">500+</div>
                <div className="font-sans text-[13px] text-luxury-secondary font-light uppercase tracking-wider">
                  Events Promoted
                </div>
              </div>
              <div>
                <div className="font-display text-[54px] sm:text-[64px] text-luxury-gold font-light mb-1">50K</div>
                <div className="font-sans text-[13px] text-luxury-secondary font-light uppercase tracking-wider">
                  Monthly Visitors
                </div>
              </div>
              <div>
                <div className="font-display text-[54px] sm:text-[64px] text-luxury-gold font-light mb-1">12</div>
                <div className="font-sans text-[13px] text-luxury-secondary font-light uppercase tracking-wider">
                  Cities covered
                </div>
              </div>
              <div>
                <div className="font-display text-[54px] sm:text-[64px] text-luxury-gold font-light mb-1">98%</div>
                <div className="font-sans text-[13px] text-luxury-secondary font-light uppercase tracking-wider">
                  Client Return Rate
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="py-24 border-t border-luxury-border">
              <div className="pb-6 mb-16 text-center">
                <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase font-semibold">
                  / THE ONBOARDING PROCESS
                </span>
                <h2 className="font-display text-[36px] font-light text-luxury-primary mt-2">
                  How It Works
                </h2>
              </div>

              <div className="relative">
                <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-luxury-gold/20" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                  {steps.map((step, idx) => (
                    <div key={idx} className="space-y-4 text-center md:text-left">
                      <div className="w-14 h-14 rounded-full border border-luxury-gold flex items-center justify-center bg-luxury-bg mx-auto md:mx-0 shadow-[0_0_15px_rgba(184,151,58,0.1)]">
                        <span className="font-mono text-[16px] text-luxury-gold font-semibold tracking-wider">
                          {step.num}
                        </span>
                      </div>
                      <h4 className="font-sans text-[16px] font-medium text-luxury-primary tracking-wide">
                        {step.title}
                      </h4>
                      <p className="font-sans text-[13px] text-luxury-secondary leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <section className="border border-luxury-border bg-luxury-surface/20 p-8 md:p-12 space-y-12">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold block mb-2">
                  PROTOCOL 01 // DATA MINIMIZATION
                </span>
                <h3 className="font-display text-[22px] text-luxury-primary font-light mb-4">
                  Curation Over Collection
                </h3>
                <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
                  VELUX operates on a strict principle of data minimization. We only collect essential coordinates required to process event listings, coordinate editorial review, and verify payment integrity. We never track cross-site user sessions or build comprehensive tracking matrices.
                </p>
              </div>

              <div className="border-t border-luxury-border pt-10">
                <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold block mb-2">
                  PROTOCOL 02 // ZERO AD-TRACKING ALLIANCE
                </span>
                <h3 className="font-display text-[22px] text-luxury-primary font-light mb-4">
                  Discerning Exclusion
                </h3>
                <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
                  Discerning audiences deserve an environment free from programmatic interruption. VELUX guarantees that your browsing habits, selected categories, and event inquiries are never cataloged, processed, or traded with third-party data brokers or marketing firms.
                </p>
              </div>

              <div className="border-t border-luxury-border pt-10">
                <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold block mb-2">
                  PROTOCOL 03 // SECURE ESCROW PROTOCOLS
                </span>
                <h3 className="font-display text-[22px] text-luxury-primary font-light mb-4">
                  Transaction & Communication Security
                </h3>
                <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
                  All communications sent via our RSVP system and partnership inquiries undergo point-to-point encryption. Client metadata is retained strictly for the duration necessary to satisfy compliance and accounting parameters, followed by permanent, verified purging.
                </p>
              </div>

              <div className="border-t border-luxury-border pt-10 text-center">
                <p className="font-mono text-[11px] text-luxury-muted uppercase tracking-widest">
                  VELUX SECURE CODES · VERSION 2.4 (UPDATED JUN 2026)
                </p>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <section className="border border-luxury-border bg-luxury-surface/20 p-8 md:p-12 space-y-12">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold block mb-2">
                  STANDARDS 01 // EDITORIAL AUTONOMY
                </span>
                <h3 className="font-display text-[22px] text-luxury-primary font-light mb-4">
                  The Right of Curation
                </h3>
                <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
                  VELUX is an editorial platform, not a public noticeboard. We maintain complete autonomy over which events are approved for placement. Paying for a package initiates the editorial evaluation process but does not guarantee final publishing if the event fails brand-alignment standards.
                </p>
              </div>

              <div className="border-t border-luxury-border pt-10">
                <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold block mb-2">
                  STANDARDS 02 // INTELLECTUAL & GRAPHIC INTEGRITY
                </span>
                <h3 className="font-display text-[22px] text-luxury-primary font-light mb-4">
                  Aesthetic Standards
                </h3>
                <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
                  All promotional assets, photographs, copy, and schedule lists submitted by partners must conform to our editorial guidelines. Our design desk reserves the right to re-format listing graphics or refine text descriptions to preserve the architectural elegance of the platform.
                </p>
              </div>

              <div className="border-t border-luxury-border pt-10">
                <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold block mb-2">
                  STANDARDS 03 // DISCLAIMERS & OUTCOMES
                </span>
                <h3 className="font-display text-[22px] text-luxury-primary font-light mb-4">
                  Vetting & Attendance
                </h3>
                <p className="font-sans text-[14px] text-luxury-secondary font-light leading-relaxed">
                  While VELUX deploys advanced conversion tracking and high-intent targeting strategies to fill seats, final venue logistics, attendee safety, and event execution are the sole liability of the designated organizer. VELUX is not responsible for event cancellations or scheduling shifts.
                </p>
              </div>

              <div className="border-t border-luxury-border pt-10 text-center">
                <p className="font-mono text-[11px] text-luxury-muted uppercase tracking-widest">
                  VELUX PLATFORM COMPLIANCE · VERSION 4.1
                </p>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Final Centered CTA Section */}
      <section className="py-24 text-center border-t border-luxury-border max-w-2xl mx-auto mt-16">
        <h3 className="font-display font-light text-[32px] sm:text-[36px] text-luxury-primary mb-6">
          Ready to fill your next event?
        </h3>
        <button
          onClick={() => onNavigate('submit')}
          className="border border-luxury-gold text-luxury-gold bg-transparent px-10 py-4 text-[11px] tracking-[0.15em] font-sans font-medium uppercase rounded-[2px] transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-bg hover:shadow-[0_0_20px_rgba(184,151,58,0.2)] cursor-pointer"
        >
          SUBMIT YOUR EVENT →
        </button>
      </section>
    </div>
  );
}
