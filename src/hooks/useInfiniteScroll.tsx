import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useScroll} from './useScroll';

function isRemainingScrollSpaceBelow(threshold: number) {
    return window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - threshold;
}

export function useInfiniteScroll(onPageEnd: Function): [boolean, Dispatch<SetStateAction<boolean>>] {
    const [canScrollDown, setCanScrollDown] = useState(true);

    useScroll(() => {
        if (isRemainingScrollSpaceBelow(100)) {
            setCanScrollDown(false);
        }
    });

    useEffect(() => {
        if (!canScrollDown) {
            onPageEnd();
        }
    }, [canScrollDown]);

    return [canScrollDown, setCanScrollDown];
}
