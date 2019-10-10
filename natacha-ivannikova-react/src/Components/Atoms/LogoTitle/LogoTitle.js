import React from 'react';
import './LogoTitle.css';

const LogoTitle = ({ href, text }) => {
  return (
    <h1 className="logo">
      <a href={href}>{text} </a>
    </h1>
  );
};

export default LogoTitle;
