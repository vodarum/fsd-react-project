import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'features/switch-theme';
import { faClipboardList, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LangSwitcher } from 'features/switch-lang';
import { useTranslation } from 'react-i18next';

type SidebarProps = {
    className?: string;
    collapsed?: boolean;
};

export const Sidebar = ({ className, collapsed }: SidebarProps) => {
    const { t } = useTranslation('navigation');

    const links = [
        // TODO: получать из config
        { path: '/', title: 'Главная', icon: faHome },
        {
            path: '/about',
            title: 'O сайте',
            icon: faClipboardList,
        },
    ];

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={classNames(cls.links)}>
                {links.map((l) => (
                    <AppLink key={l.path} to={l.path} className={cls.link}>
                        {' '}
                        <FontAwesomeIcon
                            icon={l.icon}
                            className={classNames('', {}, ['fa-fw'])}
                        />
                        <span className={cls.linkTitle}>{t(l.title)}</span>
                    </AppLink>
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
