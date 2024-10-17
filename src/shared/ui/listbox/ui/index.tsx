import {
    Field,
    Label,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import cls from './index.module.scss';
import { classNames } from 'shared/lib/class-names';
import { typedMemo } from 'shared/lib/typed-memo';
import { VStack } from 'shared/ui/stack';
import { useTheme } from 'shared/lib/theme';
import { Button } from 'shared/ui/button';

type ListBoxOption<T extends string> = {
    value: T;
    text: string;
};

type ListBoxProps<T extends string> = {
    className?: string;
    disabled?: boolean;
    label?: string;
    options?: ListBoxOption<T>[];
    value?: T;
    onChange: (value: T) => void;
};

const ListBox = typedMemo(<T extends string>(props: ListBoxProps<T>) => {
    const { theme } = useTheme();
    const { className, disabled, label, options, value, onChange } = props;

    const content = (
        <Listbox value={value} onChange={onChange} disabled={disabled}>
            <ListboxButton as={Button} className={className}>
                {value}
            </ListboxButton>
            <ListboxOptions
                anchor='bottom'
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

export { ListBox, type ListBoxOption };
