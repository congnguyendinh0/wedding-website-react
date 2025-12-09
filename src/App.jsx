import React, { useState, useEffect } from 'react';
import InvitationCard from './components/InvitationCard';
import Hero from './components/Hero';
import Story from './components/Story';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, [isContentVisible]); // Re-run when content becomes visible


  return (
    <LanguageProvider>
      <div>
        {/* Envelope Opener Section */}
        <div id="envelope-overlay" style={{ opacity: isContentVisible ? 0 : 1, visibility: isContentVisible ? 'hidden' : 'visible', transition: 'opacity 2.5s ease-out, visibility 2.5s 2.5s', pointerEvents: isContentVisible ? 'none' : 'auto' }}>
          <InvitationCard onComplete={() => setIsContentVisible(true)} />
        </div>

        <Navbar />

        {/* Main Website Content */}
        <main id="main-content" className={!isContentVisible ? 'hidden' : ''}>
          <Hero />
          <Story />
          <Gallery />
          <FAQ />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
