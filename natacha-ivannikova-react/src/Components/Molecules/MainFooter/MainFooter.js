import React from 'react';
import FooterTitle from '../../Atoms/FooterTitle/FooterTitle';
import FooterDescription from '../../Atoms/FooterDescription/FooterDescription';
import './MainFooter.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <FooterTitle title="Esta web esta hecha con:" />
      <FooterDescription
        text="En mi web he usado Grid Layout, Flex-box, Custom properties & Variable
      fonts con HTML5, BEM & Atomic design."
      />
    </footer>
  );
};

export default Footer;
