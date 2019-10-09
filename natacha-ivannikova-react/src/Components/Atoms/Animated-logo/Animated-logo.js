import React from 'react';
import './Animated-logo.css';
import logo from '../../../assets/images/woman.svg';

const AnimatedLogo = () => {
  return (
    <article className="box-article">
      <div className="c-globe__element-wrapper">
        <figure className="svg-woman">
          <img src={logo} className="App-logo" alt="logo" />
        </figure>
        <div className="c-globe__orb-1"></div>
        <div className="c-globe__orb-2"></div>
        <div className="c-globe__orb-3"></div>
        <div className="c-globe__orb-4"></div>
      </div>
    </article>
  );
};

export default AnimatedLogo;
