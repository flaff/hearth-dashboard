import React from 'react';
import {shallow} from 'enzyme';

import {Input} from './Input';

it('should pass value prop to input element', () => {
    const
        component = shallow(<Input value={'test string'} />),
        input = component.find('input');

    expect(input.prop('value')).toBe('test string');
});
