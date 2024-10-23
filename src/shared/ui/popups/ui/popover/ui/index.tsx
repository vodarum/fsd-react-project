import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import cls from './index.module.scss';
import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { classNames } from 'shared/lib/class-names';
import { useTheme } from 'shared/lib/theme';
import { Button, ButtonVariants } from 'shared/ui/button';

type PopoverProps = PropsWithChildren &
    Pick<ComponentProps<typeof PopoverPanel>, 'anchor'> & {
        className?: string;
        activator: ReactNode;
    };

const AppPopover = (props: PopoverProps) => {
    const { theme } = useTheme();
    const { className, anchor = 'bottom', activator, children } = props;

    return (
        <Popover>
            <PopoverButton
                as={Button}
                className={className}
                variant={ButtonVariants.clear}
            >
                {activator}
            </PopoverButton>
            <PopoverPanel
                anchor={anchor}
                className={classNames(cls.panel, {}, [theme])}
            >
                {children}
            </PopoverPanel>
        </Popover>
    );
};

export { AppPopover as Popover };
