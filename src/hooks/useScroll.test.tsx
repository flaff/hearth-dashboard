import React from 'react';
import {spy} from 'sinon';
// @ts-ignore https://github.com/mpeyper/react-hooks-testing-library/pull/8
import {renderHook} from 'react-hooks-testing-library';
import {useScroll} from './useScroll';

const triggerScrollEvent = () => window.dispatchEvent(new Event('scroll'));

it('should trigger hook on "scroll" event', () => {
    const onScrollSpy = spy();
    renderHook(() => useScroll(onScrollSpy));

    expect(onScrollSpy.called).toBeFalsy();

    triggerScrollEvent();
    expect(onScrollSpy.called).toBeTruthy();
});
