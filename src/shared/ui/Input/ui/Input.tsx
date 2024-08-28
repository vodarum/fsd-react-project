import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';

const InputVariants = {
    outlined: 'outlined',
    underlined: 'underlined',
} as const;

type InputVariant = (typeof InputVariants)[keyof typeof InputVariants];

type InputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
> & {
    className?: string;
    label?: string;
    value?: string;
    variant?: InputVariant;
    onChange?: (value: string) => void;
};

const Input = memo((props: InputProps) => {
    const {
        className,
        autoFocus,
        label,
        value,
        variant,
        onChange,
        ...otherProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (autoFocus) inputRef.current?.focus();
        }, 0);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [autoFocus]);

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && <label data-testid='label'>{label}</label>}
            <input
                data-testid='input'
                ref={inputRef}
                className={classNames(cls.input, {}, [cls[variant]])}
                value={value}
                onChange={handleChange}
                {...otherProps}
            />
        </div>
    );
});

Input.displayName = 'Input';

export { Input, InputVariants };
