import React from 'react';
import './BoxTitle.css';

const BoxTitle = ({ title }) => {
  return (
    <header className="box-article__header">
      <h3 className="box-article__title">{title}</h3>
    </header>
  );
};

export default BoxTitle;
