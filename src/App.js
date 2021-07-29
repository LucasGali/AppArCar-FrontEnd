import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SignIn from "./view/SignIn/SignIn"
import SignUp from './view/SignUp/SignUp';
import Home from './view/Home/Home';
import LandingPageView from './view/LandingPage/LandingPage';
import ProfileView from './view/ProfileView/ProfileView';
import MetricsView from './view/Metrics/Metrics';
import NotFound from './view/NotFound/NotFound';
import { useDispatch, connect } from 'react-redux';
import { userData } from './actions/index';
import { IS_TOKEN } from './actions/types';

function App({ storedUser }) {
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(userData(IS_TOKEN, { token: localStorage.getItem('jwt'), email: localStorage.getItem('email') }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {storedUser.token ? <Redirect to="/home" /> : <LandingPageView />}
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/home">
            {!storedUser.token ? <Redirect to="*" /> : <Home />}
          </Route>
          <Route exact path="/profile">
            {!storedUser.token ? <Redirect to="*" /> : <ProfileView />}
          </Route>
          <Route exact path="/metrics">
            {!storedUser.token ? <Redirect to="*" /> : <MetricsView />}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  storedUser: state.userData,
});

export default connect(mapStateToProps)(App);
