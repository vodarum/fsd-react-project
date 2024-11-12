import { memo, PropsWithChildren } from 'react';
import { DefaultProps } from '@/shared/api';
import { classNames } from '@/shared/lib/class-names';
import cls from './index.module.scss';

const TitleLevels = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6,
} as const;

type TitleLevel = (typeof TitleLevels)[keyof typeof TitleLevels];

type TitleProps = PropsWithChildren &
    DefaultProps & {
        level?: TitleLevel;
    };

const Title = memo((props: TitleProps) => {
    const { className, children, level = 1, ...otherProps } = props;
    const Wrapper: keyof HTMLElementTagNameMap = `h${level}`;

    return (
        <Wrapper
            className={classNames('', {}, [className, cls[`title-${level}`]])}
            {...otherProps}
        >
            {children}
        </Wrapper>
    );
});

export { Title, TitleLevels };
