import {
    Field,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import cls from './index.module.scss';
import { ComponentProps } from 'react';
import { classNames } from '@/shared/lib/class-names';
import { typedMemo } from '@/shared/lib/typed-memo';
import { useTheme } from '@/shared/lib/theme';
import { Button } from '@/shared/ui/button';
import { VStack } from '@/shared/ui/stack';

type ListboxOption<T extends string> = {
    value: T;
    text: string;
};

type ListboxProps<T extends string> = Pick<
    ComponentProps<typeof ListboxOptions>,
    'anchor'
> & {
    className?: string;
    disabled?: boolean;
    label?: string;
    options?: ListboxOption<T>[];
    value?: T;
    onChange: (value: T) => void;
};

const AppListbox = typedMemo(<T extends string>(props: ListboxProps<T>) => {
    const { theme } = useTheme();
    const {
        className,
        anchor = 'bottom',
        disabled,
        label,
        options,
        value,
        onChange,
    } = props;

    const content = (
        <Listbox value={value} onChange={onChange} disabled={disabled}>
            <ListboxButton as={Button} className={className}>
                {options?.find((o) => o.value === value)?.text}
            </ListboxButton>
            <ListboxOptions
                anchor={anchor}
                as='ul'
                className={classNames(cls.options, {}, [theme])}
            >
                {options?.map((o) => (
                    <ListboxOption
                        as='li'
                        key={o.value}
                        value={o.value}
                        className={classNames(cls.option, {
                            [cls.active]: o.value === value,
                        })}
                    >
                        {o.text}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );

    return label ? (
        <Field>
            <VStack>
                <Label>{label}</Label>
                {content}
            </VStack>
        </Field>
    ) : (
        content
    );
});

export { AppListbox as Listbox, type ListboxOption };
