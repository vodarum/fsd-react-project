import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    memo,
    PropsWithChildren,
} from 'react';

const ButtonVariants = {
    clear: 'clear',
    outlined: 'outlined',
} as const;

type ButtonVariant = (typeof ButtonVariants)[keyof typeof ButtonVariants];

type ButtonProps = PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        className?: string;
        variant?: ButtonVariant;
    };

const Button = memo(
    forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            children,
            className,
            variant = ButtonVariants.outlined,
            ...otherProps
        } = props;

        return (
            <button
                ref={ref}
                className={classNames(cls.button, {}, [
                    className,
                    cls[variant],
                ])}
                {...otherProps}
            >
                {children}
            </button>
        );
    }),
);

export { Button, ButtonVariants };
