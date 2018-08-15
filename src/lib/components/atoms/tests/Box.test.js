import React from 'react';
import ReactDOM from 'react-dom';

import Box from '../Box';

const div = document.createElement('div');

it('Renders a Box without crashing', () => {
  ReactDOM.render(<Box>Test</Box>, div);
});
