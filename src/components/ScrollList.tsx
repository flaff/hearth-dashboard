import {useEffect, useRef, useState} from 'react';
import {useScroll} from '../hooks/useScroll';
import {useResize} from '../hooks/useResize';

function getElementOffsetOrZero(element?: Element) {
    return element && Math.max(0, element && -element.getBoundingClientRect().top || 0) || 0;
}

type ScrollListProps = {
    children: Array<JSX.Element>;
};

function computeRecordHeight(container?: HTMLElement) {
    const record = container && container.firstElementChild && container.firstElementChild as HTMLElement;
    return record && record.offsetHeight || 0;
}

export function ScrollList(props: ScrollListProps) {
    const [height, setHeight] = useState(0);
    const [recordHeight, setRecordHeight] = useState(0);
    const [offset, setOffset] = useState(0);
    const container = useRef<HTMLDivElement>();

    useResize(() => {
        const windowHeight = window.innerHeight || document.documentElement.offsetHeight;
        if (windowHeight !== height) {
            setHeight(windowHeight);
        }
    });

    useScroll(() => {
        const elementOffset = getElementOffsetOrZero(container.current);
        if (offset !== elementOffset) {
            setOffset(elementOffset);
        }
    });

    useEffect(() => {
        if (!recordHeight) {

        }
    }, [!!recordHeight]);
}