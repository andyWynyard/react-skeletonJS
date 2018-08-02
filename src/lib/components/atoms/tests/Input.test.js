import React from 'react';
import ReactDOM from 'react-dom';

import Input from '../Input';

const div = document.createElement('div');

it('Input renders without crashing', () => {
  ReactDOM.render(<Input />, div);
});
