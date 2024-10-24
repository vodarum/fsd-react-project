import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { classNames } from '@/shared/lib/class-names';
import { useTheme } from '@/shared/lib/theme';
import { ComponentProps, memo, ReactNode } from 'react';
import { Button, ButtonVariants } from '@/shared/ui/button';
import { AppLink } from '@/shared/ui/app-link';
import cls from './index.module.scss';

type DropdownItem = {
    content: string;
    onClick?: () => void;
    to?: string;
    active?: boolean;
};

type DropdownProps = Pick<ComponentProps<typeof MenuItems>, 'anchor'> & {
    className?: string;
    activator: ReactNode;
    items: DropdownItem[];
};

const Dropdown = memo((props: DropdownProps) => {
    const { theme } = useTheme();
    const { className, activator, anchor = 'bottom', items } = props;

    return (
        <Menu>
            <MenuButton
                as={Button}
                className={className}
                variant={ButtonVariants.clear}
            >
                {activator}
            </MenuButton>
            <MenuItems
                anchor={anchor}
                className={classNames(cls.options, {}, [theme])}
            >
                {items.map((i, idx) =>
                    i.to ? (
                        <MenuItem
                            key={idx}
                            className={classNames(cls.option, {
                                [cls.active]: i.active,
                            })}
                            as={AppLink}
                            linkType='anchor'
                            to={i.to}
                        >
                            {i.content}
                        </MenuItem>
                    ) : (
                        <MenuItem
                            key={idx}
                            className={classNames(cls.option, {
                                [cls.active]: i.active,
                            })}
                            as={Button}
                            onClick={i.onClick}
                            variant={ButtonVariants.clear}
                        >
                            {i.content}
                        </MenuItem>
                    ),
                )}
            </MenuItems>
        </Menu>
    );
});

export { Dropdown, type DropdownItem };
