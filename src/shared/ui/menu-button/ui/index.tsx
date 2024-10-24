import { ComponentProps, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonVariants } from '@/shared/ui/button';

type MenuButtonProps = Omit<
    ComponentProps<typeof Button>,
    'children' | 'variant'
>;

export const MenuButton = memo((props: MenuButtonProps) => (
    <Button {...props} variant={ButtonVariants.clear} data-testid='menuButton'>
        <FontAwesomeIcon icon={faBars} />
    </Button>
));
