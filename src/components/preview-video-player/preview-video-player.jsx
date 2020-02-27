import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator';

const PreviewVideoPlayer = ({children}) => {
  return (
    <>
      {children}
    </>
  );
};

PreviewVideoPlayer.propTypes = {
  children: PropValidator.CHILDREN
};

export default PreviewVideoPlayer;
