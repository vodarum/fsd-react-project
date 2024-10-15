import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Title, TitleLevels } from 'shared/ui/title';
import { memo, MouseEvent, useCallback } from 'react';
import { ThemeSwitcher } from 'features/switch-theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

type RightSidebarProps = {
    className?: string;
    open?: boolean;
    onClose?: () => void;
};

export const RightSidebar = memo(
    ({ className, open, onClose }: RightSidebarProps) => {
        const { t } = useTranslation();
        const dataRole = 'wrapper';
        const handleClick = useCallback(
            (e: MouseEvent) => {
                if ((e.target as HTMLElement)?.dataset.role === dataRole)
                    onClose?.();
            },
            [onClose],
        );

        return (
            <div
                className={classNames(cls.wrapper, { [cls.open]: open }, [
                    className,
                ])}
                data-role={dataRole}
                data-testid='rightSidebar'
                onClick={handleClick}
            >
                <section className={cls.sidebar}>
                    <div className={cls.header}>
                        <Title level={TitleLevels.H3}>{t('Настройки')}</Title>
                        <FontAwesomeIcon icon={faXmark} onClick={onClose} />
                    </div>
                    <div className={cls.content}>
                        <ThemeSwitcher />
                    </div>
                </section>
            </div>
        );
    },
);
