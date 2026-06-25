import React, { useState, useMemo } from 'react';
import { EventItem, FilterState } from '../types';
import { EVENTS_DATA } from '../data';
import EventCard from './EventCard';

interface DiscoverPageProps {
  onSelectEvent: (eventId: string) => void;
}

export default function DiscoverPage({ onSelectEvent }: DiscoverPageProps) {
  const [filters, setFilters] = useState<FilterState>({
    city: 'all',
    dateRange: 'all',
    pricing: 'all',
    sort: 'date-asc',
  });

  // Unique list of cities for dropdown selection
  const cities = useMemo(() => {
    const list = new Set(EVENTS_DATA.map((e) => e.city));
    return ['all', ...Array.from(list)];
  }, []);

  // Filtered and sorted events list
  const filteredEvents = useMemo(() => {
    let result = [...EVENTS_DATA];

    // Filter by City
    if (filters.city !== 'all') {
      result = result.filter((e) => e.city.toLowerCase() === filters.city.toLowerCase());
    }

    // Filter by Pricing (All, Free, Paid)
    if (filters.pricing === 'free') {
      result = result.filter((e) => e.price === 'FREE');
    } else if (filters.pricing === 'paid') {
      result = result.filter((e) => e.price !== 'FREE');
    }

    // Sort operations
    result.sort((a, b) => {
      const timeA = new Date(a.fullDate || a.date).getTime() || 0;
      const timeB = new Date(b.fullDate || b.date).getTime() || 0;

      const priceA = a.price === 'FREE' ? 0 : a.price;
      const priceB = b.price === 'FREE' ? 0 : b.price;

      switch (filters.sort) {
        case 'date-asc':
          return timeA - timeB;
        case 'date-desc':
          return timeB - timeA;
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        default:
          return 0;
      }
    });

    return result;
  }, [filters]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div id="discover-page-container" className="pt-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Title */}
      <div className="mb-12">
        <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase block mb-4">
          / THE JOURNAL INDEX
        </span>
        <h1 className="font-display font-light text-[60px] md:text-[80px] text-luxury-primary tracking-tight leading-none uppercase">
          DISCOVER
        </h1>
      </div>

      {/* Sticky Filter Bar */}
      <div
        id="discover-filter-bar"
        className="sticky top-[80px] z-30 bg-[#08080C]/90 backdrop-blur-md border border-luxury-border rounded-[2px] p-4 mb-16 flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex flex-wrap items-center gap-4">
          {/* City Dropdown */}
          <div className="flex flex-col">
            <label className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase mb-1">
              Region
            </label>
            <select
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
              className="bg-luxury-surface border border-white/[0.08] text-luxury-primary font-sans text-[13px] px-3 py-2 rounded-[2px] focus:outline-none focus:border-luxury-gold cursor-pointer min-w-[130px] uppercase tracking-wider"
            >
              <option value="all">Any City</option>
              {cities.filter((c) => c !== 'all').map((ct) => (
                <option key={ct} value={ct}>
                  {ct}
                </option>
              ))}
            </select>
          </div>

          {/* Pricing Toggle Button Group */}
          <div className="flex flex-col">
            <label className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase mb-1">
              Pricing Level
            </label>
            <div className="flex border border-white/[0.08] rounded-[2px] overflow-hidden bg-luxury-surface">
              {(['all', 'free', 'paid'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => handleFilterChange('pricing', mode)}
                  className={`font-sans text-[12px] uppercase tracking-wider px-4 py-2 transition-colors duration-200 cursor-pointer ${
                    filters.pricing === mode
                      ? 'bg-luxury-gold text-luxury-bg font-medium'
                      : 'text-luxury-secondary hover:text-luxury-primary hover:bg-white/[0.02]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex flex-col">
          <label className="font-mono text-[9px] tracking-widest text-luxury-muted uppercase mb-1">
            Sort Index
          </label>
          <select
            value={filters.sort}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            className="bg-luxury-surface border border-white/[0.08] text-luxury-primary font-sans text-[13px] px-3 py-2 rounded-[2px] focus:outline-none focus:border-luxury-gold cursor-pointer min-w-[160px] uppercase tracking-wider"
          >
            <option value="date-asc">Date: Soonest First</option>
            <option value="date-desc">Date: Latest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid of Events or Empty State */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="animate-fade-in duration-300">
              <EventCard event={event} onClick={onSelectEvent} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-luxury-border rounded-[2px] bg-luxury-surface/50">
          <p className="font-display italic text-[36px] text-luxury-gold mb-3">
            No events found.
          </p>
          <p className="font-sans text-[14px] text-luxury-secondary max-w-sm mx-auto font-light leading-relaxed">
            There are no curated listings matching your criteria in this segment. Try adjusting your filter tags.
          </p>
          <button
            onClick={() =>
              setFilters({
                city: 'all',
                dateRange: 'all',
                pricing: 'all',
                sort: 'date-asc',
              })
            }
            className="mt-8 border border-luxury-gold text-luxury-gold bg-transparent px-6 py-3 text-[11px] tracking-widest font-mono uppercase rounded-[2px] transition-colors hover:bg-luxury-gold hover:text-luxury-bg"
          >
            CLEAR FILTERS
          </button>
        </div>
      )}
    </div>
  );
}
