import cls from './index.module.scss';
import { type NavRoute } from 'app/providers/router';
import { classNames } from 'shared/lib/class-names';
import { AppLink } from 'shared/ui/app-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'entities/user';

type SidebarItemProps = NavRoute & {
    collapsed?: boolean;
};

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { path, name, meta, collapsed } = props;
    const { t } = useTranslation('navigation');
    const isAuth = useSelector(selectIsAuth);

    if (meta?.requiresAuth && !isAuth) return null;

    return (
        <AppLink
            to={path}
            className={classNames(cls.navItem, { [cls.collapsed]: collapsed })}
            data-testid='navItem'
        >
            {meta.icon && (
                <FontAwesomeIcon icon={meta.icon} className='fa-fw' />
            )}
            <span className={cls.navItemName} data-testid='navItemName'>
                {t(name)}
            </span>
        </AppLink>
    );
});
