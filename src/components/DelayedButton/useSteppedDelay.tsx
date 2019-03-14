import {useEffect, useState} from 'react';

export function useSteppedDelay(steps: number, time: number = 1000) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < steps) {
            setTimeout(() => setProgress(progress + 1), time / steps);
        }
    }, [progress]);

    return progress;
}
