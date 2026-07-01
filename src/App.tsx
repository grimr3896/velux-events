import React, { useState } from 'react';
import { ActivePage } from './types';
import { EVENTS_DATA } from './data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import DiscoverPage from './components/DiscoverPage';
import SingleEventPage from './components/SingleEventPage';
import SubmitPage from './components/SubmitPage';
import AboutPage from './components/AboutPage';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedEventId, setSelectedEventId] = useState<string>('africatech-2025');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [aboutTab, setAboutTab] = useState<'mission' | 'privacy' | 'terms'>('mission');

  // Smooth editorial page transition handler
  const handleNavigate = (page: ActivePage, tab?: 'mission' | 'privacy' | 'terms') => {
    setIsTransitioning(true);
    if (tab) {
      setAboutTab(tab);
    } else if (page === 'about') {
      setAboutTab('mission');
    }
    setTimeout(() => {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'auto' });
      setIsTransitioning(false);
    }, 200);
  };

  const handleSelectEvent = (eventId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedEventId(eventId);
      setActivePage('single-event');
      window.scrollTo({ top: 0, behavior: 'auto' });
      setIsTransitioning(false);
    }, 200);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onSelectEvent={handleSelectEvent} />;
      case 'discover':
        return <DiscoverPage onSelectEvent={handleSelectEvent} />;
      case 'single-event':
        const event = EVENTS_DATA.find((e) => e.id === selectedEventId) || EVENTS_DATA[0];
        return (
          <SingleEventPage
            event={event}
            onSelectEvent={handleSelectEvent}
            onNavigate={handleNavigate}
          />
        );
      case 'submit':
        return <SubmitPage />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} activeTab={aboutTab} onChangeTab={setAboutTab} />;
      default:
        return <HomePage onNavigate={handleNavigate} onSelectEvent={handleSelectEvent} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-luxury-bg text-luxury-primary font-sans antialiased overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-bg">
      {/* Editorial Header Navigation always fixed */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Primary Transition Stage */}
      <main
        className={`flex-grow transition-all duration-200 ease-in-out ${
          isTransitioning ? 'opacity-0 scale-[0.995]' : 'opacity-100 scale-100'
        }`}
      >
        {renderActivePage()}
      </main>

      {/* Brand Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
