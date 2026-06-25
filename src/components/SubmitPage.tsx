import React, { useState } from 'react';
import { PACKAGES_DATA } from '../data';
import { PackageItem } from '../types';
import { Upload, CheckCircle, HelpCircle } from 'lucide-react';

export default function SubmitPage() {
  const [success, setSuccess] = useState(false);
  const [selectedMainPackage, setSelectedMainPackage] = useState<string>('featured'); // Featured is default
  const [selectedAddon, setSelectedAddon] = useState<boolean>(false); // Social Boost is addon
  const [fileName, setFileName] = useState<string>('');

  // Form states
  const [organizer, setOrganizer] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState('New York');
  const [description, setDescription] = useState('');
  const [bookingUrl, setBookingUrl] = useState('');

  // Get selected pricing values
  const mainPkg = PACKAGES_DATA.find((p) => p.id === selectedMainPackage);
  const addonPkg = PACKAGES_DATA.find((p) => p.id === 'social-boost');

  const totalPrice = (mainPkg?.priceVal || 0) + (selectedAddon ? addonPkg?.priceVal || 0 : 0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handlePackageClick = (pkg: PackageItem) => {
    if (pkg.isAddon) {
      setSelectedAddon(!selectedAddon);
    } else {
      setSelectedMainPackage(pkg.id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="submit-page-container" className="pt-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="font-mono text-[11px] tracking-[0.25em] text-luxury-gold uppercase block mb-4">
          / PARTNERSHIPS CONCIERGE
        </span>
        <h1 className="font-display font-light text-[50px] md:text-[72px] text-luxury-primary leading-tight tracking-tight mb-4">
          Promote Your Event
        </h1>
        <p className="font-display italic text-[18px] text-luxury-secondary font-light">
          Reviewed within 24 hours. Live within 48.
        </p>
      </div>

      {success ? (
        /* Success State View */
        <div className="max-w-2xl mx-auto text-center py-20 px-8 border border-luxury-gold rounded-[2px] bg-luxury-surface/40 my-12 animate-fade-in">
          <CheckCircle size={56} className="text-luxury-gold mx-auto mb-6" />
          <h2 className="font-display italic text-[36px] text-luxury-primary mb-4 leading-tight">
            Your event has been received.
          </h2>
          <p className="font-sans text-[15px] text-luxury-secondary font-light max-w-md mx-auto leading-relaxed">
            Our editorial verification team is currently reviewing your materials. A concierge partner will contact you within 24 hours to coordinate invoice settlement and verify your asset details.
          </p>
          <div className="mt-10 border-t border-luxury-border pt-8 max-w-sm mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase block mb-2">
              Submission Code
            </span>
            <span className="font-mono text-[16px] text-luxury-primary font-medium tracking-widest">
              VLX-SUB-{Math.floor(10000 + Math.random() * 90000)}
            </span>
          </div>
          <button
            onClick={() => setSuccess(false)}
            className="mt-10 border border-luxury-gold text-luxury-gold bg-transparent px-8 py-3.5 text-[12px] tracking-[0.12em] font-sans font-medium uppercase rounded-[2px] transition-all hover:bg-luxury-gold hover:text-luxury-bg cursor-pointer"
          >
            SUBMIT ANOTHER PLACEMENT
          </button>
        </div>
      ) : (
        /* Form & Package Layout */
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-24">
          {/* Left Column Form Area (60%) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Core Form Section */}
            <div className="bg-luxury-surface border border-luxury-border p-8 rounded-[2px] space-y-6">
              <h3 className="font-display text-[24px] font-light text-luxury-primary pb-3 border-b border-white/[0.03]">
                1. Registry & Identity Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    Organizer / Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Silicon Valley Tech Media"
                    value={organizer}
                    onChange={(e) => setOrganizer(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Joy Adams"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. joy@siliconvalleytech.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +1 212 555 0199"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                  />
                </div>
              </div>
            </div>

            {/* Event Specs Section */}
            <div className="bg-luxury-surface border border-luxury-border p-8 rounded-[2px] space-y-6">
              <h3 className="font-display text-[24px] font-light text-luxury-primary pb-3 border-b border-white/[0.03]">
                2. Curated Event Specifications
              </h3>

              <div className="flex flex-col">
                <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Silicon Valley Tech Summit 2025"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light cursor-pointer"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    Event Time
                  </label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Moscone Center"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                  />
                </div>
 
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. New York"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                  Event Description (6 rows minimum)
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Provide comprehensive details describing the event value, targeted demographic, schedules, and specific requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] p-4 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light resize-none placeholder:text-luxury-muted"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                  Ticket Booking / Checkout URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="e.g. https://tickets.siliconvalleytech.com/summit-2025"
                  value={bookingUrl}
                  onChange={(e) => setBookingUrl(e.target.value)}
                  className="bg-luxury-bg border border-white/10 text-luxury-primary font-sans text-[14px] px-4 py-3.5 rounded-[2px] focus:outline-none focus:border-luxury-gold transition-colors font-light placeholder:text-luxury-muted"
                />
              </div>

              {/* Styled File Upload */}
              <div className="flex flex-col">
                <label className="font-mono text-[10px] tracking-widest text-luxury-secondary uppercase mb-2">
                  Event Display Banner (16:9 Landscape Optimized)
                </label>
                <div className="border border-dashed border-white/10 rounded-[2px] bg-luxury-bg p-6 text-center hover:border-luxury-gold transition-colors cursor-pointer relative group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload size={24} className="text-luxury-gold/50 mx-auto mb-2 group-hover:text-luxury-gold transition-colors" />
                  <p className="font-sans text-[13px] text-luxury-primary font-light">
                    {fileName ? (
                      <strong className="text-luxury-gold">{fileName}</strong>
                    ) : (
                      'Drag & drop or click to select image asset'
                    )}
                  </p>
                  <p className="font-mono text-[10px] text-luxury-muted uppercase tracking-widest mt-1">
                    MAXIMUM SIZE 8MB · PNG, JPG, WEBP ONLY
                  </p>
                </div>
              </div>
            </div>

            {/* Submission CTA */}
            <div>
              <button
                type="submit"
                className="w-full bg-luxury-gold text-luxury-bg border border-luxury-gold font-sans text-[13px] font-semibold tracking-[0.15em] uppercase py-4.5 rounded-[2px] cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-luxury-gold hover:shadow-[0_0_25px_rgba(184,151,58,0.2)]"
              >
                SUBMIT FOR REVIEW →
              </button>
            </div>
          </div>

          {/* Right Column Package Selection Cards (38%, sticky) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-[100px] space-y-6">
            <div className="pb-2 border-b border-luxury-border">
              <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold uppercase font-semibold">
                / SELECT A PACKAGE
              </span>
            </div>

            <div className="space-y-4">
              {PACKAGES_DATA.map((pkg) => {
                const isAddon = pkg.isAddon;
                const isSelected = isAddon ? selectedAddon : selectedMainPackage === pkg.id;

                return (
                  <div
                    key={pkg.id}
                    onClick={() => handlePackageClick(pkg)}
                    className={`bg-luxury-surface border p-6 rounded-[2px] cursor-pointer transition-all duration-300 select-none flex flex-col justify-between ${
                      isSelected
                        ? 'border-luxury-gold bg-luxury-hover shadow-[0_4px_25px_rgba(184,151,58,0.08)]'
                        : 'border-white/[0.04] hover:border-white/10 hover:bg-luxury-hover/50'
                    }`}
                  >
                    <div>
                      {/* Header row with Popular status or Addon banner */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[11px] tracking-[0.15em] text-luxury-gold font-semibold uppercase">
                          {pkg.name} {isAddon && '— ADDON'}
                        </span>
                        {pkg.isPopular && (
                          <span className="font-mono text-[9px] tracking-widest text-luxury-bg bg-luxury-gold px-2 py-0.5 rounded-[2px] font-bold uppercase">
                            MOST POPULAR
                          </span>
                        )}
                        {isAddon && (
                          <span className="font-mono text-[9px] tracking-widest border border-luxury-gold/50 text-luxury-gold px-2 py-0.5 rounded-[2px] uppercase">
                            OPTIONAL ACCENT
                          </span>
                        )}
                      </div>

                      {/* Price display */}
                      <div className="font-display text-[32px] font-light text-luxury-primary mb-2">
                        {pkg.priceText}
                      </div>

                      {/* Brief description */}
                      <p className="font-sans text-[13px] text-luxury-secondary font-light leading-relaxed mb-4">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Feature list */}
                    <ul className="space-y-2 border-t border-white/[0.03] pt-4 mt-2 font-sans text-[12px] text-luxury-secondary font-light">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2">
                          <span className="text-luxury-gold mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Fee summary breakdown */}
            <div className="bg-luxury-surface border border-luxury-border rounded-[2px] p-6 space-y-4 shadow-lg">
              <h4 className="font-display text-[18px] font-light text-luxury-primary">
                Investment Specification Summary
              </h4>

              <div className="space-y-2 font-sans text-[13px] text-luxury-secondary font-light">
                <div className="flex justify-between">
                  <span>Selected Placement:</span>
                  <span className="font-mono text-luxury-primary uppercase text-[12px]">
                    {mainPkg?.name} ({mainPkg?.priceText})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Addon (Social Boost):</span>
                  <span className="font-mono text-luxury-primary uppercase text-[12px]">
                    {selectedAddon ? `SELECTED (${addonPkg?.priceText})` : 'EXCLUDED'}
                  </span>
                </div>
                <hr className="border-white/[0.03] my-2" />
                <div className="flex justify-between font-mono text-[15px] text-luxury-gold font-semibold tracking-wider">
                  <span>TOTAL INVESTMENT</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2 text-luxury-muted italic pt-2">
                <HelpCircle size={14} className="text-luxury-gold/50 mt-0.5 flex-shrink-0" />
                <p className="font-sans text-[11px] leading-relaxed">
                  Concierge Billing: Invoices are processed via Credit Card or ACH bank wire details dispatched immediately upon editorial approval of materials.
                </p>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
