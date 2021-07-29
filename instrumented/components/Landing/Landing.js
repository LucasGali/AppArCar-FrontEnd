import React from 'react'
import './Landing.css'

const Landing = (props) => {
  return (
    <div className="landing-section">
      <h1>{props.name}</h1>
      <p>
        {props.text}
      </p>
      <p>
        {props.text2}
      </p>
    </div>
  );
};

export default Landing
