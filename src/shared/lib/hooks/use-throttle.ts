import { useCallback, useRef } from 'react';

export const useThrottle = <Fn extends AnyFunction>(
    callback: Fn,
    delay: number,
) => {
    const ref = useRef(false);

    return useCallback(
        (...args: Parameters<Fn>) => {
            if (ref.current) return;

            callback(...args);
            ref.current = true;

            setTimeout(() => {
                ref.current = false;
            }, delay);
        },
        [callback, delay],
    );
};
