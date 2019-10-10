import React from 'react';
import './BoxList.css';
import dataBox from '../../../data/dataBox';
import parse from 'html-react-parser';
import Box from '../../Molecules/Box/Box';
import AnimatedLogo from '../../Atoms/AnimatedLogo/AnimatedLogo';
import TextOutstanding from '../../Atoms/TextOutstanding/TextOutstanding';
import BoxParagraph from '../../Atoms/BoxParagraph/BoxParagraph';

const BoxList = () => {
  return (
    <div className="list-articles">
      {dataBox.map(data => (
        <Box
          key={data.id}
          classAnimation={data.classAnimation}
          title={data.title}
        >
          {parse(data.content)}
        </Box>
      ))}

      <AnimatedLogo />
    </div>
  );
};

export default BoxList;
