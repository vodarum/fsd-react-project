import { classNames } from '@/shared/lib/class-names';
import cls from './index.module.scss';
import { memo, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { sessionSelectors } from '@/entities/session';
import { LoginButton } from '@/features/login';
import { NotificationsButton } from '@/features/notification';
import { LangSwitcher } from '@/features/switch-lang';
import { UserMenuButton } from '@/features/user';

type NavbarProps = {
    className?: string;
    append?: ReactNode;
    prepend?: ReactNode;
};

export const Navbar = memo((props: NavbarProps) => {
    const { className, append, prepend } = props;
    const isAuth = useSelector(sessionSelectors.selectIsAuth);

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {prepend && <div className={cls.prepend}>{prepend}</div>}

            {append && <div className={cls.append}>{append}</div>}

            <LangSwitcher />

            {isAuth ? (
                <>
                    <NotificationsButton />
                    <UserMenuButton />
                </>
            ) : (
                <LoginButton />
            )}
        </header>
    );
});
