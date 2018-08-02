import React from 'react';
import reactDOM from 'react-dom';

import Heading2 from '../Heading2';

const div = document.createElement('div');

it('Renders a Heading2 without crashing', () => {
  reactDOM.render(<Heading2>Hi there</Heading2>, div);
});
