import React from 'react';
import images from "../json/images";
import "../styles/donate.css"

function Donate() {
  return (
    <div className="donate-banner">
      <img
        className='donate-banner-image'
        src={images[0]['image']}
        alt={images[0]['alt']}
        key={images[0]['alt']}
      ></img>
      <div className="call-to-action">
        <h2>Welcome</h2>
        <h3>Save A Life</h3>
        <button className="donate-button">Support Our Work</button>
      </div>
    </div>
  );
}

export default Donate;
