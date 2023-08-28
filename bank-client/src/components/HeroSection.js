import React from 'react';
import '../Hero.css';
import { Button } from './Button';
import '../HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../videos/video-1.mp4' autoPlay loop muted />
      <h1>BANK | U & ME</h1>
      <p style={{marginLeft:"3%"}}>We Serve All Your Banking Needs</p>
    </div>
  );
}

export default HeroSection;
