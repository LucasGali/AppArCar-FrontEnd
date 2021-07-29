import React from 'react';
import Profile from 'components/Profile/Profile';
import CreditCard from 'components/CreditCard/CreditCard';
import NavBarComponent from 'components/NavBarComponent/NavBarComponent';
import Footer from 'components/Footer/Footer';
import './ProfileView.css'
import { connect } from 'react-redux';
import { userData } from '../../actions/index';

const ProfileView = ({ storedUser }) => (
  <div>
    <NavBarComponent isGuest={false} inRegistration={false} />
    <div className="profile-view">
      <div className="profile-card-wrapper">
        <Profile user={storedUser} isMain={true} />
        <Profile user={storedUser} isMain={false} />
      </div>
      <div className="profile-extra">
        <div className="profile-third">
          <CreditCard
            number={storedUser.number}
            brand={storedUser.brand}
            expiry={storedUser.expiry}
            storedUser={storedUser}
          />
        </div>
      </div>
    </div>
    <div className="footer-profile">
      <Footer />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  storedUser: state.userData,
});

export default connect(mapStateToProps, { userData })(ProfileView);
