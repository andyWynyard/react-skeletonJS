import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';

const div = document.createElement('div');

it('Button renders without crashing', () => {
  ReactDOM.render(<Button />, div);
});
