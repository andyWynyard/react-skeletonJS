import React from 'react';
import reactDOM from 'react-dom';

import Link from '../Link';

const div = document.createElement('div');

it('Renders Link component without crashing', () => {
  reactDOM.render(<Link>Hi there</Link>, div);
});
