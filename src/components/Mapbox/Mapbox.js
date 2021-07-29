import React, { useRef, useState, useCallback } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl, Marker } from 'react-map-gl';
import './Mapbox.css';
import location from '../../img/location.png';
import { connect } from 'react-redux';

const geolocateControlStyle = {
  right: 10,
  top: 10,
};

const navControlStyle = {
  right: 10,
  top: 45,
};

const Mapbox = ({ parkingLost }) => {
  const [viewport, setViewport] = useState({
    width: '101%',
    height: '100%',
    latitude: -26.8307,
    longitude: -65.2036,
    zoom: 14,
  });
  const mapref = useRef(viewport);
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    [],
    );
    
  const MarkerComponent = () => {
    return parkingLost.parkings.map(lot => 
      <Marker latitude={lot.latitude} longitude={lot.longitude} key={lot._id} >
        <img alt='location' className='marker-btn' src={location} />
      </Marker>       
    )
  };

  return (
    <ReactMapGL
      mapStyle={'mapbox://styles/mapbox/streets-v11'}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      {...viewport}
      ref={mapref}
      onViewportChange={handleViewportChange}
    >
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
      <NavigationControl style={navControlStyle} />
      <MarkerComponent />
    </ReactMapGL>
  );
};

const mapStateToProps = (state) => ({
  parkingLost: state.parkingData,
});

export default connect(mapStateToProps)(Mapbox);
