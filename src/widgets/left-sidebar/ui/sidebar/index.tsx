import cls from './index.module.scss';
import { navRoutes } from '@/app/providers/router';
import { classNames } from '@/shared/lib/class-names';
import { memo } from 'react';
import { SidebarItem } from '../sidebar-item';

type LeftSidebarProps = {
    className?: string;
    open?: boolean;
};

export const LeftSidebar = memo(({ className, open }: LeftSidebarProps) => {
    return (
        <section
            className={classNames(cls.sidebar, { [cls.open]: open }, [
                className,
            ])}
            data-testid='leftSidebar'
        >
            <nav className={cls.links}>
                {navRoutes.map((r) => (
                    <SidebarItem key={r.path} {...r} collapsed={!open} />
                ))}
            </nav>
        </section>
    );
});
