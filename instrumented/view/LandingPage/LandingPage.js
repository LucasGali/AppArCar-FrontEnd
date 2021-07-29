import React from 'react';
import NavBarComponent from 'components/NavBarComponent/NavBarComponent';
import Mapbox from 'components/Mapbox/Mapbox';
import Landing from 'components/Landing/Landing';
import Footer from "components/Footer/Footer"
import ImageWrapper from 'components/ImageWrapper/ImageWrapper'
import text from "utils/text"
import './LandingPage.css';

const LandingPageView = () => {
  return (
    <div>
      <NavBarComponent isGuest={true} inRegistration={false} />
      <div className="landing-intro">
        <div className="text-wrapper">
          <p>{text.landingPage.title}</p>
          <p>{text.landingPage.subtitle}</p>
        </div>
        <div className="logo-unsta-wrapper">
          <div className="logo-unsta"></div>
        </div>
      </div>
      <div className="landing-1">
        <Landing
          name={text.landingPage.sections.section1.title}
          text={text.landingPage.sections.section1.text}
        />
      </div>
      <div className="landing-2">
        <div className="landing-2-section">          
          <Landing
            name={text.landingPage.sections.section3.title}
            text={text.landingPage.sections.section3.text1}
            text2={text.landingPage.sections.section3.text2}
          />
        </div>
        <div className="landing-map-wrapper">
          <Mapbox />
        </div>
      </div>
      <div className="landing-3">
        <Landing
          name={text.landingPage.sections.section2.title}
          text={text.landingPage.sections.section2.text}
        />
        <ImageWrapper />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageView;
