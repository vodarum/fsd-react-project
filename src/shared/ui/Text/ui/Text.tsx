import { memo, ReactNode } from 'react';

type TextProps = {
    className?: string;
    children?: ReactNode;
};

const Text = memo((props: TextProps) => {
    const { className, children } = props;
    return <p className={className}>{children}</p>;
});

export { Text };
