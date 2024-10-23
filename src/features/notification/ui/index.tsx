import { memo } from 'react';
import { NotificationList } from 'entities/notification';
import { Popover } from 'shared/ui/popups';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

type NotificationsButtonProps = {
    className?: string;
};

const NotificationsButton = memo(({ className }: NotificationsButtonProps) => {
    return (
        <Popover
            className={className}
            activator={<FontAwesomeIcon icon={faBell} />}
            anchor='bottom end'
        >
            <NotificationList />
        </Popover>
    );
});

export { NotificationsButton };
