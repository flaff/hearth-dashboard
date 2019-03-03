import React from 'react';
import {storiesOf} from '@storybook/react';

const welcomeStories = storiesOf('Welcome', module);

welcomeStories.add(
    'Introduction',
    () => (
        <span>Storybook introduction</span>
    )
);
