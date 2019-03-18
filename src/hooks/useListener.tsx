import {useEffect} from 'react';

const EVENT_OPTIONS = {
    passive: true,
    capture: true
};

export function useListener(eventName: string, onEvent: (event: any) => any, eventOptions: any = EVENT_OPTIONS) {
    useEffect(() => {
        addEventListener(eventName, onEvent, eventOptions);
        return () => removeEventListener(eventName, onEvent);
    }, []);
}
