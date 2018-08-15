import React from 'react';

import Heading1 from '../atoms/Heading1';
import Box from '../atoms/Box';

const BoxedHeading = props => {
  return (
    <Box
      padding={props.boxPadding}
      borderRadius={props.borderRadius}
      border={props.boxBorder}>
      <Heading1
        fontSize={props.fontSize}
        fontFamily={props.fontFamily}
        color={props.textColor}
        margin={props.headingMargin}>
        {props.children}
      </Heading1>
    </Box>
  );
};

export default BoxedHeading;
