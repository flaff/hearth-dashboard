import {useListener} from './useListener';

export function useResize(onResize: (event: UIEvent) => any, eventOptions?: any) {
    useListener('resize', onResize, eventOptions);
}
