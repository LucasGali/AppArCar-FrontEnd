import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import iconSet from 'icons.json';
import IcomoonReact from 'icomoon-react';
import text from 'utils/text';
import './NavBarComponent.css';
import { useDispatch, connect } from 'react-redux';
import { userData } from '../../actions/index';
import { SIGN_OFF } from '../../actions/types';

const NavBarComponent = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const GuestNavBar = () => {
    return (
      <nav className="navbar" data-testid="navbar">
        <div>
          <IcomoonReact
            className="icons-nav-user"
            iconSet={iconSet}
            color="white"
            size={30}
            icon="location"
          />
          <span>{text.navbar.app}</span>
        </div>
        <div>
          <button
            className="btn-sigin-signup btn  my-2 my-sm-0"
            onClick={() => history.push('/signin')}
            data-testid="signin-button"
          >
            {text.navbar.signin}
          </button>
          <button
            className="btn btn-sigin-signup my-2 my-sm-0 "
            onClick={() => history.push('/signup')}
          >
            {text.navbar.signup}
          </button>
        </div>
      </nav>
    );
  };

  const Registration = () => {
    return (
      <nav className="navbar">
        <div>
          <IcomoonReact
            className="icons-nav-user"
            iconSet={iconSet}
            color="white"
            size={30}
            icon="location"
          />
          <span>{text.navbar.app}</span>
        </div>
        <div>
          <button
            className="btn btn-sigin-signup my-2 my-sm-0 "
            onClick={() => history.push('/')}
          >
            <span>{text.navbar.back}</span>
          </button>
        </div>
      </nav>
    );
  };

  const signOff = () => {
    localStorage.clear();
    dispatch(userData(SIGN_OFF));
    history.push('/');
  };

  const UserNavBar = () => {
    return (
      <nav className="navbar">
        <div>
          <IcomoonReact
            className="icons-nav-user"
            iconSet={iconSet}
            color="white"
            size={30}
            icon="location"
          />
          <span>AppArCar</span>
        </div>
        <div className="nav-wrapper-icons" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/Home" className="nav-link text-blue">
                <span title={text.navbar.home}>
                  <IcomoonReact
                    className="icons-nav-user"
                    iconSet={iconSet}
                    color="white"
                    size={30}
                    icon="home"
                  />
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="profileBtn"
                to="/Profile"
                className="nav-link text-blue"
                data-testid="profile-icon"
              >
                <span title={text.navbar.profile}>
                  <IcomoonReact
                    className="icons-nav-user"
                    iconSet={iconSet}
                    color="white"
                    size={30}
                    icon="user"
                  />
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Metrics"
                className="nav-link text-blue"
                data-testid="metrics-icon"
              >
                <span title={text.navbar.metrics}>
                  <IcomoonReact
                    className="icons-nav-user"
                    iconSet={iconSet}
                    color="white"
                    size={30}
                    icon="stats-dots"
                  />
                </span>
              </Link>
            </li>
            <li className="nav-item sign-off">
              <button
                className="btn my-2 my-sm-0 "
                data-testid="signOffBtn"
                onClick={signOff}
              >
                <span title={text.navbar.signOff}>
                  <IcomoonReact
                    className="icons-nav-user"
                    iconSet={iconSet}
                    color="white"
                    size={30}
                    icon="exit"
                  />
                  {text.navbar.signOff}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  const NavBar = () => {
    return props.isGuest ? (
      <GuestNavBar />
    ) : props.inRegistration ? (
      <Registration />
    ) : (
      <UserNavBar />
    );
  };

  return (
    <div>
      <NavBar />
    </div>
  );
};

const mapStateToProps = (state) => ({
  storedUser: state.userData,
});

export default connect(mapStateToProps)(NavBarComponent);
