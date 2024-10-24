import cls from './index.module.scss';
import { ChangeEvent, SelectHTMLAttributes, useMemo } from 'react';
import { classNames } from '@/shared/lib/class-names';
import { typedMemo } from '@/shared/lib/typed-memo';

const SelectVariants = {
    outlined: 'outlined',
    underlined: 'underlined',
} as const;

type SelectVariant = (typeof SelectVariants)[keyof typeof SelectVariants];

type SelectOption<T extends string> = {
    value: T;
    text: string;
};

type SelectProps<T extends string> = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'value' | 'onChange'
> & {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    variant?: SelectVariant;
    onChange?: (value: T) => void;
};

const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
