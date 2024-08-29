import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Title.module.scss';

const TitleLevels = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6,
} as const;

type TitleLevel = (typeof TitleLevels)[keyof typeof TitleLevels];

type TitleProps = {
    className?: string;
    children?: ReactNode;
    level?: TitleLevel;
};

const Title = (props: TitleProps) => {
    const { className, children, level = 1 } = props;
    const _className = classNames('', {}, [className, cls[`title-${level}`]]);

    switch (level) {
        case TitleLevels.H2:
            return <h2 className={_className}>{children}</h2>;
        case TitleLevels.H3:
            return <h3 className={_className}>{children}</h3>;
        case TitleLevels.H4:
            return <h4 className={_className}>{children}</h4>;
        case TitleLevels.H5:
            return <h5 className={_className}>{children}</h5>;
        case TitleLevels.H6:
            return <h6 className={_className}>{children}</h6>;
        default:
            return <h1 className={_className}>{children}</h1>;
    }
};

export { Title, TitleLevels };
