import { configure, setAddon, addDecorator } from '@storybook/react';
import staticMarkup from 'react-storybook-addon-static-markup';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Maverick component repository',
  // THEME CAN ONLY BE USED IN V4 - STILL IN ALPHA
  // theme: {
  //   ...themes.normal,
  //   mainBorderRadius: 0
  // },
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  goFullScreen: false
});

// automatically import all files ending in *.stories.js

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(() => {
  setAddon(staticMarkup);
  loadStories();
}, module);
