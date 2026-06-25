import React, { useState } from 'react';
import { EventItem } from '../types';
import { EVENTS_DATA, AGENDA_DATA, WHO_SHOULD_ATTEND, REVIEWS_DATA } from '../data';
import EventCard from './EventCard';
import { Calendar, MapPin, DollarSign, Clock, ShieldAlert, CheckCircle2, Star } from 'lucide-react';

interface SingleEventPageProps {
  event: EventItem;
  onSelectEvent: (eventId: string) => void;
  onNavigate: (page: 'discover' | 'submit') => void;
}

export default function SingleEventPage({ event, onSelectEvent, onNavigate }: SingleEventPageProps) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Retrieve 3 related events (exclude current event)
  const relatedEvents = EVENTS_DATA.filter((e) => e.id !== event.id).slice(0, 3);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setShowBookingModal(false);
      setBookingName('');
      setBookingEmail('');
    }, 4000);
  };

  return (
    <div id={`single-event-container-${event.id}`} className="w-full relative">
      {/* 520px Hero Banner Image */}
      <div className="w-full h-[360px] md:h-[520px] bg-gradient-to-br from-luxury-surface via-[#050508] to-luxury-surface border-b border-luxury-border relative overflow-hidden flex flex-col justify-end p-8 md:p-16 gold-diagonal">
        {event.imageUrl && (
          <>
            <img
              src={event.imageUrl}
              alt={event.title}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover animate-fade-in ${
                (event.isPast || event.isOverdue) ? 'grayscale-[30%] opacity-80' : ''
              }`}
            />
            {/* Ambient vignette and background gradient overlays to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/70 to-luxury-bg/20" />
            <div className="absolute inset-0 bg-black/40 animate-fade-in" />
          </>
        )}

        {/* Red diagonal watermark overlay for single event hero banner */}
        {(event.isPast || event.isOverdue) && (
          <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
            <div 
              className="bg-red-600/95 text-white font-mono text-[14px] md:text-[18px] tracking-[0.3em] font-bold py-2.5 px-32 uppercase whitespace-nowrap shadow-[0_0_25px_rgba(220,38,38,0.5)] border-y border-red-500/50"
              style={{
                transform: 'rotate(-20deg)',
                width: '160%',
                textAlign: 'center',
              }}
            >
              {event.isOverdue ? 'OVERDUE' : 'PAST EVENT'}
            </div>
          </div>
        )}

        {/* Category Overlay tag */}
        <div className="max-w-7xl mx-auto w-full mb-4 relative z-10">
          {event.isOverdue && (
            <span className="font-mono text-[11px] tracking-[0.25em] text-red-500 uppercase px-4 py-1.5 border border-red-500/30 bg-red-950/90 rounded-[4px] inline-block mb-3 mr-3 font-semibold shadow-[0_0_15px_rgba(220,38,38,0.2)] animate-pulse">
              OVERDUE
            </span>
          )}
          {event.isPast && !event.isOverdue && (
            <span className="font-mono text-[11px] tracking-[0.25em] text-red-400 uppercase px-4 py-1.5 border border-red-400/30 bg-red-950/90 rounded-[4px] inline-block mb-3 mr-3 font-semibold">
              PAST EVENT
            </span>
          )}
          <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase px-4 py-1.5 border border-luxury-gold/30 bg-luxury-bg/90 rounded-[4px] inline-block mb-3">
            EVENT PROFILE
          </span>
          <p className="font-mono text-[11px] tracking-[0.15em] text-luxury-secondary uppercase">
            {event.date} · {event.city}
          </p>
        </div>
      </div>

      {/* Main Content Layout (65% / 35%) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column (65%) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header Metadata */}
          <div>
            <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase block mb-3">
              EVENT DIRECTORY INDEX
            </span>
            <h1 className="font-display font-light text-[40px] md:text-[56px] text-luxury-primary leading-tight tracking-tight mb-4">
              {event.title}
            </h1>
            <p className="font-sans text-[15px] text-luxury-secondary font-light">
              {event.organizer}
            </p>
          </div>

          <hr className="border-luxury-border" />

          {/* Long Description (Split by paragraphs) */}
          <div className="font-sans text-[15px] sm:text-[16px] text-luxury-secondary leading-relaxed font-light space-y-6">
            {event.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Agenda Section */}
          <section id="agenda-section" className="border-t border-luxury-border pt-12">
            <div className="pb-6 mb-8">
              <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold block">
                / AGENDA
              </span>
            </div>

            <div className="space-y-8">
              {AGENDA_DATA.map((agenda, index) => (
                <div
                  key={index}
                  className="border-l border-luxury-gold pl-6 py-1 transition-all hover:border-l-2 hover:pl-7 duration-200"
                >
                  <span className="font-mono text-[11px] tracking-[0.12em] text-luxury-gold uppercase block mb-1">
                    {agenda.time}
                  </span>
                  <h4 className="font-display text-[20px] text-luxury-primary font-light mb-1">
                    {agenda.title}
                  </h4>
                  <p className="font-sans text-[13px] text-luxury-secondary font-light">
                    {agenda.speaker}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Who Should Attend Section */}
          <section id="attend-section" className="border-t border-luxury-border pt-12">
            <div className="pb-6 mb-8">
              <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold block">
                / WHO SHOULD ATTEND
              </span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-[14px] text-luxury-secondary font-light">
              {WHO_SHOULD_ATTEND.map((bullet, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-luxury-gold mt-1">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column Sticky Panel (35%) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-[100px] space-y-6">
            {/* Main Booking Card */}
            <div className="bg-luxury-surface border border-luxury-border border-t-2 border-t-luxury-gold rounded-[2px] p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              <h3 className="font-display text-[24px] font-light text-luxury-primary mb-6 pb-4 border-b border-white/[0.03]">
                Event Placement Details
              </h3>

              {/* Specs Stack */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Calendar size={18} className="text-luxury-gold" />
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase">Date</p>
                    <p className="font-sans text-[13px] text-luxury-primary font-light">{event.fullDate}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock size={18} className="text-luxury-gold" />
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase">Time Schedule</p>
                    <p className="font-sans text-[13px] text-luxury-primary font-light">08:00 AM — 06:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin size={18} className="text-luxury-gold" />
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase">Venue Location</p>
                    <p className="font-sans text-[13px] text-luxury-primary font-light">
                      {event.venue}, {event.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <DollarSign size={18} className="text-luxury-gold" />
                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase">Admission Value</p>
                    <p className="font-mono text-[13px] text-luxury-gold font-medium">
                      {event.formattedPrice}
                    </p>
                  </div>
                </div>
              </div>



              <hr className="border-white/[0.03] my-6" />

              {/* Past/Overdue Booking warning banner */}
              {(event.isPast || event.isOverdue) && (
                <div className="bg-red-950/20 border border-red-900/30 rounded-[2px] p-4 text-left mb-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-[11px] tracking-[0.2em] text-red-400 uppercase font-bold">
                      {event.isOverdue ? 'Overdue Status Active' : 'Past Event Status'}
                    </span>
                  </div>
                  <p className="font-sans text-[12px] text-red-200/70 leading-relaxed font-light">
                    This event was scheduled for {event.fullDate}. Booking and registration lines are now officially closed.
                  </p>
                </div>
              )}

              {/* Organizer Detail block */}
              <div className="text-left">
                <p className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-1">
                  Organizer Registry
                </p>
                <p className="font-sans text-[13px] text-luxury-primary font-light mb-3">{event.organizer}</p>
                <div className="flex items-start space-x-2 text-luxury-muted italic">
                  <ShieldAlert size={14} className="text-luxury-gold/60 mt-0.5 flex-shrink-0" />
                  <p className="font-sans text-[11px] leading-relaxed">
                    Refund Policy Note: Tickets are non-refundable but fully transferable up to 48 hours prior to scheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map placeholder */}
            <div className="bg-luxury-surface border border-luxury-border rounded-[2px] p-4 flex flex-col justify-center items-center h-[200px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e14] to-[#0a0a0e] opacity-80" />
              {/* Grid map overlay aesthetic */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10 text-center">
                <MapPin size={28} className="text-luxury-gold/50 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(event.venue + ' ' + event.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-medium hover:text-luxury-gold-light transition-colors"
                >
                  VIEW ON GOOGLE MAPS →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ATTENDEE REVIEWS SECTION */}
      <section id="reviews-section" className="border-t border-luxury-border py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold block mb-2">
              / ATTENDEE REVIEWS & ACCLAIM
            </span>
            <h2 className="font-display font-light text-[32px] md:text-[40px] text-luxury-primary tracking-tight">
              What the Community Says
            </h2>
          </div>
          
          {/* Summary Ratings Badge */}
          <div className="bg-luxury-surface/80 border border-luxury-border p-4 rounded-[2px] flex items-center gap-6 self-start md:self-auto">
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-display font-medium text-[28px] text-luxury-primary leading-none">4.9</span>
                <span className="font-sans text-[14px] text-luxury-secondary">/ 5.0</span>
              </div>
              <p className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase mt-1">Verified Rating</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-left">
              <div className="flex text-luxury-gold gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-luxury-gold stroke-none" />
                ))}
              </div>
              <p className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase mt-1">20 Positive Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {(showAllReviews ? REVIEWS_DATA : REVIEWS_DATA.slice(0, 6)).map((review) => (
            <div 
              key={review.id} 
              className="bg-luxury-surface/40 border border-luxury-border p-6 rounded-[2px] hover:border-luxury-gold/30 transition-all duration-300 flex flex-col justify-between animate-fade-in"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Rating stars */}
                  <div className="flex text-luxury-gold gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-luxury-gold stroke-none" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-luxury-muted tracking-wide">
                    {review.date}
                  </span>
                </div>
                
                <p className="font-sans text-[13px] text-luxury-secondary font-light leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.03]">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-luxury-bg border border-luxury-gold/20 text-luxury-gold font-mono text-[11px] font-semibold">
                  {review.initials}
                </div>
                <div className="text-left">
                  <h5 className="font-sans text-[13px] font-medium text-luxury-primary">
                    {review.name}
                  </h5>
                  <p className="font-mono text-[9px] tracking-widest text-luxury-secondary uppercase">
                    {review.role} {review.company && `· ${review.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Toggle Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="border border-luxury-gold text-luxury-gold bg-transparent px-8 py-3.5 text-[11px] tracking-[0.15em] font-mono uppercase rounded-[2px] transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-bg hover:shadow-[0_0_15px_rgba(184,151,58,0.2)] cursor-pointer"
          >
            {showAllReviews ? 'COLLAPSE REVIEWS' : 'SHOW ALL 20 POSITIVE REVIEWS'}
          </button>
        </div>
      </section>

      {/* RELATED EVENTS Section */}
      <section id="related-section" className="border-t border-luxury-border py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="pb-6 mb-12">
          <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold">
            / RELATED EVENTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedEvents.map((relatedEvent) => (
            <div key={relatedEvent.id}>
              <EventCard event={relatedEvent} onClick={onSelectEvent} />
            </div>
          ))}
        </div>
      </section>

      {/* Booking Checkout Modal Overlay */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-luxury-bg/95 backdrop-blur-sm z-50 flex items-center justify-center p-6 transition-all duration-300">
          <div className="bg-luxury-surface border border-luxury-gold max-w-md w-full p-8 rounded-[2px] relative shadow-[0_10px_50px_rgba(184,151,58,0.15)] animate-fade-in">
            {/* Close */}
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-luxury-secondary hover:text-luxury-gold transition-colors font-mono text-[14px]"
            >
              [X]
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 size={48} className="text-luxury-gold mx-auto" />
                <h4 className="font-display italic text-[32px] text-luxury-primary leading-tight">
                  TICKET SECURED
                </h4>
                <p className="font-sans text-[13px] text-luxury-secondary font-light leading-relaxed">
                  Your placement at <strong className="text-luxury-primary">{event.title}</strong> has been authorized. A confirmation ticket PDF and receipt have been dispatched to your email address.
                </p>
                <p className="font-mono text-[10px] text-luxury-gold/50 uppercase tracking-widest pt-4">
                  RESERVATION REFERENCE: VLX-{Math.floor(100000 + Math.random() * 900000)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-luxury-gold uppercase block mb-1">
                    ORDER SECURE CHECKOUT
                  </span>
                  <h4 className="font-display text-[26px] font-light text-luxury-primary">
                    Book Your Placement
                  </h4>
                  <p className="font-sans text-[12px] text-luxury-secondary font-light">
                    {event.title} · {event.formattedPrice}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Myers"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                      Email Destination
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. david@domain.com"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="bg-luxury-bg border border-luxury-border p-4 rounded-[2px] space-y-2">
                  <div className="flex justify-between font-sans text-[12px] text-luxury-secondary">
                    <span>1x General Admission</span>
                    <span>{event.formattedPrice}</span>
                  </div>
                  <div className="flex justify-between font-sans text-[12px] text-luxury-secondary">
                    <span>Platform Service Charge</span>
                    <span>{event.price === 'FREE' ? 'FREE' : '$0'}</span>
                  </div>
                  <hr className="border-white/[0.03]" />
                  <div className="flex justify-between font-mono text-[13px] text-luxury-gold font-medium">
                    <span>TOTAL VALUE</span>
                    <span>{event.formattedPrice}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-luxury-gold text-luxury-bg border border-luxury-gold font-sans text-[12px] font-medium tracking-[0.12em] uppercase py-4 rounded-[2px] transition-colors hover:bg-transparent hover:text-luxury-gold cursor-pointer"
                >
                  AUTHORIZE PAYMENT & RESERVE
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
