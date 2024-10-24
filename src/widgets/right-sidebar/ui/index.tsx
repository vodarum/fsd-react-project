import { memo } from 'react';
import { ThemeSwitcher } from 'features/switch-theme';
import { useTranslation } from 'react-i18next';
import { Drawer } from 'shared/ui/drawer';

type RightSidebarProps = {
    className?: string;
    open?: boolean;
    onClose?: () => void;
};

export const RightSidebar = memo(
    ({ className, open, onClose }: RightSidebarProps) => {
        const { t } = useTranslation();

        return (
            <Drawer
                className={className}
                title={t('Настройки')}
                open={open}
                placement='right'
                onClose={onClose}
            >
                <ThemeSwitcher />
            </Drawer>
        );
    },
);
