import {useListener} from './useListener';

export function useScroll(onScroll: (event: UIEvent) => any, eventOptions?: any) {
    useListener('scroll', onScroll, eventOptions);
}
