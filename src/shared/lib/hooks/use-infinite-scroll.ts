import { MutableRefObject, useEffect } from 'react';

type UseInfiniteScrollOptions = {
    callback: () => void;
    rootRef: MutableRefObject<HTMLElement>;
    targetRef: MutableRefObject<HTMLElement>;
};

export const useInfiniteScroll = ({
    callback,
    rootRef,
    targetRef,
}: UseInfiniteScrollOptions) => {
    useEffect(() => {
        const root = rootRef.current;
        const target = targetRef.current;
        const options = {
            root,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback();
            }
        }, options);

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, [callback, rootRef, targetRef]);
};
