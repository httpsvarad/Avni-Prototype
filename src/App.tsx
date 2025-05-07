import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import KeyFeatures from './components/sections/KeyFeatures';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import ImpactStories from './components/sections/ImpactStories';
import WhyPlatform from './components/sections/WhyPlatform';
import ContactUs from './components/sections/ContactUs';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <KeyFeatures />
        <Services />
        <HowItWorks />
        <ImpactStories />
        <WhyPlatform />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;