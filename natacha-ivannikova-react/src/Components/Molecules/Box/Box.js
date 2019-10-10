import React from 'react';
import './Box.css';
import BoxTitle from '../../Atoms/BoxTitle/BoxTitle';
import BoxParagraph from '../../Atoms/BoxParagraph/BoxParagraph';

const Box = ({ classAnimation, title, children }) => {
  return (
    <article className={classAnimation}>
      <BoxTitle title={title} />
      <BoxParagraph>{children}</BoxParagraph>
    </article>
  );
};

export default Box;
