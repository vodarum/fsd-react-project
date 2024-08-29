import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

type TextProps = {
    className?: string;
    children?: ReactNode;
};

const Text = (props: TextProps) => {
    const { className, children } = props;
    return <p className={classNames('', {}, [className])}>{children}</p>;
};

export { Text };
