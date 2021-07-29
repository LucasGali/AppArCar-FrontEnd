import React from 'react';
import NavBarComponent from 'components/NavBarComponent/NavBarComponent';
import NotFound from 'components/NotFound/NotFound';
import Footer from 'components/Footer/Footer';
import './NotFound.css';

const NotFoundView = () => {
  return (
    <div>
      <NavBarComponent isGuest={true} inRegistration={false} />
      <div className="not-found-view">
        <NotFound />
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundView;
