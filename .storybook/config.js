import { configure, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import './base.scss';

addDecorator(withKnobs)

setOptions({
  name: 'React-controls',
  url: 'https://github.com/filter-components/react-controls',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

function loadStories () {
  require('../stories/Playground.story')
  require('../stories/CheckBox.story')
  require('../stories/Group.story')
  require('../stories/Radio.story')
  require('../stories/Switch.story')
}

configure(loadStories, module);
