import React from 'react';
import images from "../json/images";
import "../styles/donate.css"

function Nav() {
  return (
    <div className="donate-banner">
      {
       images.map(image => {
         return (
          <img
            className='donate-banner-image'
            src={image['image']}
            alt={image['alt']}
            key={image['alt']}
          ></img>
         )
       }) 
      }
      <div className="call-to-action">
        <h2>Welcome</h2>
        <h3>Save A Life</h3>
        <button>Support Our Work</button>
      </div>
    </div>
  );
}

export default Nav;
