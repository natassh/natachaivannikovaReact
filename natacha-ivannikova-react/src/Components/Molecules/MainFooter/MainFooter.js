import React from 'react';
import FooterTitle from '../../Atoms/FooterTitle/FooterTitle';
import FooterDescription from '../../Atoms/FooterDescription/FooterDescription';
import './MainFooter.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <FooterTitle />
      <FooterDescription />
    </footer>
  );
};

export default Footer;
