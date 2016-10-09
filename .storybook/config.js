import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'REACT-COMPONENT-BOILERPLATE',
  url: 'https://github.com/ritz078/react-component-boilerplate',
  goFullScreen: false,
  showLeftPanel: false,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
});

function loadStories () {
  require('../stories/App.story');
}

configure(loadStories, module);
