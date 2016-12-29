import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

import './base.scss';

setOptions({
  name: 'React-controls',
  url: 'https://github.com/ritz078/react-component-boilerplate',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
});

function loadStories () {
  require('../stories/CheckBox.story')
  require('../stories/Group.story')
  require('../stories/Radio.story')
  require('../stories/Switch.story')
}

configure(loadStories, module);
