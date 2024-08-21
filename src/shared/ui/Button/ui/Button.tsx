import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

const ButtonVariants = {
    clear: "clear",
    outlined: "outlined",
} as const;

type ButtonVariant = (typeof ButtonVariants)[keyof typeof ButtonVariants];

type ButtonProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: ButtonVariant;
  };

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { children, className, variant, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export { Button, ButtonVariants };
