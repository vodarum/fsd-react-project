import { PropsWithClassName } from '@/shared/api';
import { memo, ReactNode } from 'react';

type TextProps = PropsWithClassName & {
    children?: ReactNode;
    align?: 'left' | 'right' | 'center' | 'justify';
};

const Text = memo((props: TextProps) => {
    const { className, children, align } = props;
    return (
        <p className={className} style={{ textAlign: align }}>
            {children}
        </p>
    );
});

export { Text };
