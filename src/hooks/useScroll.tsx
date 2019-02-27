import {useEffect} from 'react';

export function useScroll(onScroll: (event: UIEvent) => any) {
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
}
