import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel style={{objectFit:'cover'}} showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        // src='https://www.zastavki.com/pictures/1920x1200/2008/Drawn_wallpapers_Bank_011074_.jpg'
        src='https://www.investopedia.com/thmb/7wh22wWJZRumd4IA4QjfqDJT3AI=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Investopedia_Banking101_colorv1-ef7ac25979d14d82b220e09c89c01014.png'
        alt='...'
      >
        {/* <h5>BANK|U&ME</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.investopedia.com/thmb/7wh22wWJZRumd4IA4QjfqDJT3AI=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Investopedia_Banking101_colorv1-ef7ac25979d14d82b220e09c89c01014.png'
        alt='...'
      >
        {/* <h5>BANK|U&ME</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.investopedia.com/thmb/7wh22wWJZRumd4IA4QjfqDJT3AI=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Investopedia_Banking101_colorv1-ef7ac25979d14d82b220e09c89c01014.png'
      
        alt='...'
      >
        {/* <h5>BANK|U&ME</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </MDBCarouselItem>
    </MDBCarousel>
  );
}