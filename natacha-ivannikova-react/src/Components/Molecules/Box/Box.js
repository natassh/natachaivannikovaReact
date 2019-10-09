import React from 'react';
import './Box.css';
import BoxTitle from '../../Atoms/BoxTitle/BoxTitle';
import BoxParagraph from '../../Atoms/BoxParagraph/BoxParagraph';

const Box = ({ classAnimation }) => {
  return (
    <article className={classAnimation}>
      <BoxTitle />
      <BoxParagraph />
    </article>
  );
};

export default Box;
