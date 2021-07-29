import React from 'react';
import iconSet from '../../icons.json';
import IcomoonReact from 'icomoon-react';
import text from 'utils/text';
import './NoParking.css'

const NoParking = () => { 
  return (
    <div className="not-found-wrapper">
      <IcomoonReact iconSet={iconSet} color="#444" size={100} icon="crying" />
      <h3>{text.noParking.text}</h3>
    </div>
  );
};

export default NoParking;
