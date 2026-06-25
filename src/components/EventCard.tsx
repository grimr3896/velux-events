import React from 'react';
import { EventItem } from '../types';

interface EventCardProps {
  event: EventItem;
  onClick: (eventId: string) => void;
  variant?: 'default' | 'large' | 'compact';
}

export default function EventCard({ event, onClick, variant = 'default' }: EventCardProps) {
  const isLarge = variant === 'large';
  const isCompact = variant === 'compact';

  return (
    <div
      id={`event-card-${event.id}`}
      onClick={() => onClick(event.id)}
      className={`group cursor-pointer bg-luxury-surface border border-luxury-border rounded-[2px] p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-luxury-gold hover:shadow-[0_8px_30px_rgb(0,0,0,0.8)] h-full`}
    >
      <div>
        {/* Event Image Placeholder */}
        <div
          className={`w-full bg-gradient-to-br from-luxury-surface via-[#0d0d15] to-luxury-surface relative overflow-hidden flex items-center justify-center gold-diagonal rounded-[2px] ${
            isLarge ? 'h-[260px] md:h-[400px]' : isCompact ? 'aspect-video h-[160px]' : 'aspect-video'
          }`}
        >
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                (event.isPast || event.isOverdue) ? 'grayscale-[30%] opacity-80' : ''
              }`}
            />
          ) : (
            /* Centered generic label if no image is provided */
            <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold/50 uppercase select-none transition-opacity duration-300 group-hover:opacity-10">
              EVENT
            </span>
          )}

          {/* Red diagonal watermark overlay */}
          {(event.isPast || event.isOverdue) && (
            <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
              <div 
                className="bg-red-600/90 text-white font-mono text-[10px] sm:text-[11px] tracking-[0.25em] font-bold py-1 px-16 uppercase whitespace-nowrap shadow-[0_0_15px_rgba(220,38,38,0.4)] border-y border-red-500/50"
                style={{
                  transform: 'rotate(-25deg)',
                  width: '140%',
                  textAlign: 'center',
                }}
              >
                {event.isOverdue ? 'OVERDUE' : 'PAST EVENT'}
              </div>
            </div>
          )}

          {/* Golden View overlay on hover */}
          <div className="absolute inset-0 bg-luxury-bg/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <span className="font-mono text-[12px] tracking-[0.2em] text-luxury-gold font-medium">
              VIEW EVENT →
            </span>
          </div>
        </div>

        {/* Card Metadata */}
        <div className="flex items-center justify-between mt-5 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] tracking-[0.12em] text-luxury-gold uppercase">
              {event.date}
            </span>
            {event.isOverdue && (
              <span className="bg-red-950/80 text-red-500 border border-red-800/30 font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded-[2px] font-semibold">
                OVERDUE
              </span>
            )}
            {event.isPast && !event.isOverdue && (
              <span className="bg-white/5 text-luxury-secondary border border-white/10 font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded-[2px]">
                PAST
              </span>
            )}
          </div>
          <span className="font-mono text-[11px] tracking-[0.12em] text-luxury-secondary uppercase">
            {event.city}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-light leading-snug text-luxury-primary group-hover:text-luxury-gold transition-colors duration-200 mb-3 ${
            isLarge ? 'text-[28px] md:text-[34px]' : isCompact ? 'text-[18px]' : 'text-[22px]'
          }`}
        >
          {event.title}
        </h3>

        {/* Venue */}
        <p className="font-sans text-[13px] text-luxury-secondary font-light mb-4 line-clamp-1">
          {event.venue}
        </p>
      </div>

      {/* Footer Details */}
      <div className="flex items-center justify-between border-t border-luxury-border pt-4 mt-auto">
        <span className="font-mono text-[12px] tracking-[0.12em] text-luxury-gold font-medium">
          {event.formattedPrice}
        </span>
        <span className="font-sans text-[11px] tracking-wider uppercase text-luxury-secondary group-hover:text-luxury-gold transition-colors">
          DISCOVER
        </span>
      </div>
    </div>
  );
}
