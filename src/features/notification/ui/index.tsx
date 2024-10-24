import { memo, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NotificationList } from '@/entities/notification';
import { useDevice } from '@/shared/lib/hooks';
import { Button, ButtonVariants } from '@/shared/ui/button';
import { Drawer } from '@/shared/ui/drawer';
import { Popover } from '@/shared/ui/popups';

type NotificationsButtonProps = {
    className?: string;
};

const MobileNotificationsButton = memo(
    ({ className }: NotificationsButtonProps) => {
        const [openDrawer, setOpenDrawer] = useState(false);

        const handleDrawerOpen = useCallback(() => {
            setOpenDrawer(true);
        }, [setOpenDrawer]);

        const handleDrawerClose = useCallback(() => {
            setOpenDrawer(false);
        }, [setOpenDrawer]);

        return (
            <>
                <Button
                    className={className}
                    onClick={handleDrawerOpen}
                    variant={ButtonVariants.clear}
                >
                    <FontAwesomeIcon icon={faBell} />
                </Button>
                <Drawer
                    open={openDrawer}
                    onClose={handleDrawerClose}
                    placement='bottom'
                    closable={false}
                >
                    <NotificationList />
                </Drawer>
            </>
        );
    },
);

export const NotificationsButton = memo(
    ({ className }: NotificationsButtonProps) => {
        const { isMobile } = useDevice();

        return isMobile ? (
            <MobileNotificationsButton className={className} />
        ) : (
            <Popover
                className={className}
                activator={<FontAwesomeIcon icon={faBell} />}
                anchor='bottom end'
            >
                <NotificationList />
            </Popover>
        );
    },
);
