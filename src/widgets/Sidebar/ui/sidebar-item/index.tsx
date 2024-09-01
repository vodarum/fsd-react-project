import cls from './index.module.scss';
import { classNames } from 'shared/lib/class-names';
import { AppLink } from 'shared/ui/app-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type SidebarProps = {
    path: string;
    title: string;
    icon: IconDefinition;
    collapsed?: boolean;
};

export const SidebarItem = memo((props: SidebarProps) => {
    const { path, title, icon, collapsed } = props;
    const { t } = useTranslation('navigation');

    return (
        <AppLink
            to={path}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            data-testid='link'
        >
            <FontAwesomeIcon icon={icon} className='fa-fw' />
            <span className={cls.linkTitle} data-testid='linkTitle'>
                {t(title)}
            </span>
        </AppLink>
    );
});
