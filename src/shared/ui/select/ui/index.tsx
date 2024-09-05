import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { ChangeEvent, memo, SelectHTMLAttributes, useMemo } from 'react';

const SelectVariants = {
    outlined: 'outlined',
    underlined: 'underlined',
} as const;

type SelectVariant = (typeof SelectVariants)[keyof typeof SelectVariants];

type SelectOption = {
    value: string;
    text: string;
};

type SelectProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'value' | 'onChange'
> & {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    variant?: SelectVariant;
    onChange?: (value: string) => void;
};

const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        variant = SelectVariants.outlined,
        onChange,
        ...otherProps
    } = props;

    const optionList = useMemo(
        () =>
            options?.map((o) => (
                <option className={cls.option} key={o.value} value={o.value}>
                    {o.text}
                </option>
            )),
        [options],
    );

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {label && <label data-testid='label'>{label}</label>}
            <select
                data-testid='select'
                className={classNames(cls.select, {}, [cls[variant]])}
                value={value}
                onChange={handleChange}
                {...otherProps}
            >
                {optionList}
            </select>
        </div>
    );
});

export { Select, SelectVariants, type SelectOption };
