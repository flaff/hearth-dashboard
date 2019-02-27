import React from 'react';
import {spy} from 'sinon';
import {render} from 'react-testing-library';
import {useScroll} from './useScroll';

const triggerScrollEvent = () => window.dispatchEvent(new Event('scroll'));

function ScrollComponent(props: {onScroll: any}) {
    useScroll(props.onScroll);
    return null;
}

it('should trigger hook on "scroll" event', () => {
    const
        onScrollSpy = spy(),
        {rerender} = render(<ScrollComponent onScroll={onScrollSpy} />);

    expect(onScrollSpy.called).toBeFalsy();

    triggerScrollEvent();
    rerender(<ScrollComponent onScroll={onScrollSpy} />); // force useEffect
    expect(onScrollSpy.called).toBeTruthy();
});
