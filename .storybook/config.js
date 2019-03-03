import {addDecorator, configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import {withInfo} from '@storybook/addon-info';

setAddon(JSXAddon);

const stories = require.context('../src', true, /\.stories\.[jt]sx?$/);

function loadStories() {
    addDecorator(withInfo({inline: true}));
    require('./welcome.tsx');
    stories.keys().forEach(file => stories(file));
}

configure(loadStories, module);
