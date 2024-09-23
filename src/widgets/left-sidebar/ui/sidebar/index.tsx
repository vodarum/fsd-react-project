import cls from './index.module.scss';
import { navRoutes } from 'app/providers/router';
import { classNames } from 'shared/lib/class-names';
import { LangSwitcher } from 'features/switch-lang';
import { memo } from 'react';
import { SidebarItem } from '../sidebar-item';

type LeftSidebarProps = {
    className?: string;
    open?: boolean;
};

export const LeftSidebar = memo(({ className, open }: LeftSidebarProps) => {
    return (
        <div
            className={classNames(cls.sidebar, { [cls.open]: open }, [
                className,
            ])}
            data-testid='leftSidebar'
        >
            <div className={cls.links}>
                {navRoutes.map((r) => (
                    <SidebarItem key={r.path} {...r} collapsed={!open} />
                ))}
            </div>

            <div className={cls.switchers}>
                <LangSwitcher short={!open} />
            </div>
        </div>
    );
});
