import { ComponentProps, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonVariants } from 'shared/ui/button';

type SettingsButtonProps = Omit<
    ComponentProps<typeof Button>,
    'children' | 'variant'
>;

export const SettingsButton = memo((props: SettingsButtonProps) => (
    <Button
        {...props}
        variant={ButtonVariants.clear}
        data-testid='settingsButton'
    >
        <FontAwesomeIcon icon={faGear} />
    </Button>
));
