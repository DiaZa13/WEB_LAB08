import React from 'react';
import { Link } from 'react-router-dom';
import title from '../media/title.png';

function homePage() {
  return (
    <div className="home-background d-flex justify-content-center vw-100 vh-100 flex-wrap">
      <div className="vw-100 d-flex justify-content-center animate__animated animate__bounceInDown">
        <img src={title} className="image-transition" alt="Home Background" />
      </div>
      <Link to="/gamePage" className="btn home-button">Comenzar</Link>
    </div>
  );
}

export default homePage;
