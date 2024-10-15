import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { memo, ReactNode, useCallback, useEffect, useState } from 'react';
import { LoginModal } from 'features/login';
import { LogoutButton } from 'features/logout';
import { sessionSelectors } from 'entities/session';
import { useSelector } from 'react-redux';

type NavbarProps = {
    className?: string;
    append?: ReactNode;
    prepend?: ReactNode;
};

export const Navbar = memo((props: NavbarProps) => {
    const { className, append, prepend } = props;
    const { t } = useTranslation('navigation');
    const isAuth = useSelector(sessionSelectors.selectIsAuth);

    const [isLoginModal, setIsLoginModal] = useState(false);

    const handleLoginModalOpen = useCallback(() => {
        setIsLoginModal(true);
    }, []);

    const handleLoginModalClose = useCallback(() => {
        setIsLoginModal(false);
    }, []);

    useEffect(() => {
        if (isAuth && isLoginModal) handleLoginModalClose();
    }, [isAuth, isLoginModal]);

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {prepend && <div className={cls.prepend}>{prepend}</div>}

            {append && <div className={cls.append}>{append}</div>}

            {isAuth ? (
                <LogoutButton />
            ) : (
                <>
                    <Button onClick={handleLoginModalOpen}>
                        {t('Авторизоваться')}
                    </Button>

                    <LoginModal
                        isOpen={isLoginModal}
                        onClose={handleLoginModalClose}
                    />
                </>
            )}
        </header>
    );
});
