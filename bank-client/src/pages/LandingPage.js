import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default LandingPage;
