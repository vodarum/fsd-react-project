import { PropsWithChildren } from 'react';
import cls from './index.module.scss';
import { classNames } from 'shared/lib/class-names';

type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around';
type FlexAlign = 'start' | 'end' | 'center' | 'stretch';
type FlexDirection = 'row' | 'column';
type FlexGap = 4 | 8 | 16 | 32;
type FlexProps = PropsWithChildren & {
    className?: string;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    tag?: keyof HTMLElementTagNameMap;
};

export const Flex = (props: FlexProps) => {
    const {
        children,
        className,
        justify = 'start',
        align = 'start',
        direction = 'row',
        gap,
        tag = 'div',
    } = props;

    const Wrapper = tag;

    const classes = [
        className,
        cls[`direction-${direction}`],
        cls[`justify-${justify}`],
        cls[`align-${align}`],
        gap && cls[`gap-${gap}`],
    ];

    return (
        <Wrapper className={classNames(cls.flex, {}, classes)}>
            {children}
        </Wrapper>
    );
};
