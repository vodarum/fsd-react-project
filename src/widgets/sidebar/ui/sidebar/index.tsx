import cls from './index.module.scss';
import { classNames } from 'shared/lib/class-names';
import { ThemeSwitcher } from 'features/switch-theme';
import { LangSwitcher } from 'features/switch-lang';
import { memo } from 'react';
import { SidebarItem } from '../sidebar-item';
import { items } from '../../model';

type SidebarProps = {
    className?: string;
    collapsed?: boolean;
};

export const Sidebar = memo(({ className, collapsed }: SidebarProps) => {
    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid='sidebar'
        >
            <div className={cls.links}>
                {items.map((i) => (
                    <SidebarItem key={i.path} {...i} collapsed={collapsed} />
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
