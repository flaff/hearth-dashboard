import React from 'react';
import {render} from 'react-testing-library';

import {Input} from './Input';

it('should pass value prop to input element', () => {
    const {getByLabelText, rerender} = render(<Input label={'test input'} value={''} />);
    const input = getByLabelText('test input') as HTMLInputElement;

    expect(input.value).toBe('');

    rerender(<Input label={'test input'} value={'test string'} />);
    expect(input.value).toBe('test string');
});
