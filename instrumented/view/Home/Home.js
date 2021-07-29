import React, { useState, useEffect } from 'react';
import NavBarComponent from 'components/NavBarComponent/NavBarComponent';
import ParkingListComponent from '../../components/ParkingListComponent/ParkingListComponent';
import './Home.css';
import axios from 'axios';
import { useDispatch, connect } from 'react-redux';
import { userData } from '../../actions/index';
import { HOME_DATA, SIGN_OFF } from '../../actions/types';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const [locationPoint, setlocationPoint] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();

  const getData = async () => {
    try {
      const headers = {
        Authorization: localStorage.jwt,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/profile`,
        { email: localStorage.getItem('email') },
        { headers },
      );
      setData(response.data);
      dispatch(userData(HOME_DATA, response.data));
    } catch (e) {
      console.error('Opps!', e);
    }
  };

  const successCallback = (locationData) => {
    setlocationPoint(locationData);    
  }

  const failureCallback = (e) => {
    alert('Hubo un error tratando de conseguir tu posicionamiento')
    localStorage.clear();
    dispatch(userData(SIGN_OFF));
    history.push('/');
  }

  useEffect(() => {
    getData();
    if (window.navigator.geolocation) {
      let options = {
        enableHighAccuracy: true,
        maximumAge: 0
      };
      window.navigator.geolocation.getCurrentPosition(
        successCallback,
        failureCallback,
        options,
      );
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="home-view">
      <NavBarComponent isGuest={false} inRegistration={false} />
      <div className="asd"></div>
      <div className="home-container">
        <div className="box">
          <ParkingListComponent
            vehicleData={data}
            locationPoint={locationPoint}
          />
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  storedUser: state.userData,
});


export default connect(mapStateToProps)(Home);
