import React from 'react';
import { Navbar } from './components/Navbar';
import { IntroSection } from './components/IntroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AdminPanelSection } from './components/AdminPanelSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white font-vazir selection:bg-blue-500 selection:text-white dir-rtl" dir="rtl">
      {/* Header Navigation */}
      <Navbar onScrollToSection={scrollToSection} />

      {/* Main Sections */}
      <main>
        {/* 1. Intro Section */}
        <IntroSection onScrollToSection={scrollToSection} />

        {/* 2. Features Section */}
        <FeaturesSection />

        {/* 3. Admin Panel Showcase Section */}
        <AdminPanelSection />
      </main>

      {/* Footer */}
      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
}
