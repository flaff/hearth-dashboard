import React from 'react';
import {storiesOf} from '@storybook/react';

import {Input} from './Input';

const stories = storiesOf('Input', module);

stories.addWithJSX('with label',
    () => (<Input label={'with-label'} value={''} />)
);
