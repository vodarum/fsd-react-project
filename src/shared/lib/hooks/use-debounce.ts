import { useCallback, useRef } from 'react';

export const useDebounce = <Fn extends AnyFunction>(
    callback: Fn,
    delay: number,
) => {
    const ref = useRef<ReturnType<typeof setTimeout>>();

    return useCallback(
        (...args: Parameters<Fn>) => {
            clearTimeout(ref.current);

            ref.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};
