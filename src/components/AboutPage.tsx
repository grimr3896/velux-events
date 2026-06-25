import React from 'react';
import { ActivePage } from '../types';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
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

  return (
    <div id="about-page-container" className="pt-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Hero Editorial Headline (No Image) */}
      <section className="py-20 text-center max-w-4xl mx-auto">
        <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase block mb-6 animate-fade-in">
          / ABOUT VELUX
        </span>
        <h1 className="font-display font-light text-[52px] sm:text-[72px] md:text-[80px] text-luxury-primary leading-none tracking-tight">
          We Don't Just List Events.
          <span className="block italic text-luxury-gold-light font-light mt-4">We Fill Them.</span>
        </h1>
      </section>

      {/* Editorial Copy (3 Paragraphs) */}
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

      {/* Stats Row (4 Items) */}
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

      {/* How It Works - Horizontal/Vertical Timeline */}
      <section className="py-24 border-t border-luxury-border">
        <div className="pb-6 mb-16 text-center">
          <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase font-semibold">
            / THE ONBOARDING PROCESS
          </span>
          <h2 className="font-display text-[36px] font-light text-luxury-primary mt-2">
            How It Works
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Thin horizontal line behind steps on desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-luxury-gold/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-4 text-center md:text-left">
                {/* Step number button bubble */}
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

      {/* Final Centered CTA Section */}
      <section className="py-24 text-center border-t border-luxury-border max-w-2xl mx-auto">
        <h3 className="font-display font-light text-[36px] text-luxury-primary mb-6">
          Ready to fill your next event?
        </h3>
        <button
          onClick={() => onNavigate('submit')}
          className="border border-luxury-gold text-luxury-gold bg-transparent px-10 py-4 text-[12px] tracking-[0.12em] font-sans font-medium uppercase rounded-[2px] transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-bg hover:shadow-[0_0_20px_rgba(184,151,58,0.2)] cursor-pointer"
        >
          SUBMIT YOUR EVENT →
        </button>
      </section>
    </div>
  );
}
