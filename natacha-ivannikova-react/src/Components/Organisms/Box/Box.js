import React from 'react';
import './Box.css';

const Box = ({ classAnimation, title, children }) => {
  return (
    <article className="box-article  animColor animShow {classAnimation}">
      <header className="box-article__header">
        <h3 className="box-article__title">{title}</h3>
      </header>
      {children}
    </article>
  );
};

export default Box;
