import React from 'react';
import {shallow} from 'enzyme';

import {Translate} from './Translate';

it('should render key if no translation available', () => {
    const component = shallow(<Translate i18nKey={'notExistingKey'} />);

    expect(component.text()).toBe('notExistingKey');
});
