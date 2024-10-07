import cls from './index.module.scss';
import { MutableRefObject, PropsWithChildren, useRef } from 'react';
import { classNames } from 'shared/lib/class-names';
import { useInfiniteScroll } from 'shared/lib/hooks';

type SectionProps = PropsWithChildren & {
    className?: string;
    onScrollEnd?: () => void;
};

export const Section = ({ children, className, onScrollEnd }: SectionProps) => {
    const rootRef = useRef() as MutableRefObject<HTMLDivElement>;
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        callback: () => {
            onScrollEnd?.();
        },
        rootRef,
        targetRef,
    });

    return (
        <section
            className={classNames(cls.section, {}, [className])}
            ref={rootRef}
        >
            {children}
            <div ref={targetRef} />
        </section>
    );
};
