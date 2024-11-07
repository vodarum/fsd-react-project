import { State } from '@/app/providers/store-provider';
import { MutableRefObject, PropsWithChildren, useRef, UIEvent } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PropsWithClassName } from '@/shared/api';
import { classNames } from '@/shared/lib/class-names';
import {
    useAppDispatch,
    useInfiniteScroll,
    useInitialEffect,
    useThrottle,
} from '@/shared/lib/hooks';
import { scrollPositionActions, scrollPositionSelectors } from '../model';
import cls from './index.module.scss';

type SectionProps = PropsWithChildren &
    PropsWithClassName & {
        onScrollEnd?: () => void;
        'data-testid'?: string;
    };

export const Section = (props: SectionProps) => {
    const { children, className, onScrollEnd, ...otherProps } = props;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();

    const rootRef = useRef() as MutableRefObject<HTMLDivElement>;
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

    const scrollPosition = useSelector((state: State) =>
        scrollPositionSelectors.selectValueByPath(state, pathname),
    );

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollPositionActions.setData({
                [pathname]: e.currentTarget.scrollTop,
            }),
        );
    }, 500);

    useInfiniteScroll({
        callback: () => {
            onScrollEnd?.();
        },
        rootRef,
        targetRef,
    });

    useInitialEffect(() => {
        rootRef.current.scrollTop = scrollPosition;
    }, []);

    return (
        <section
            className={classNames(cls.section, {}, [className])}
            ref={rootRef}
            onScroll={handleScroll}
            {...otherProps}
        >
            {children}
            <div ref={targetRef} />
        </section>
    );
};
