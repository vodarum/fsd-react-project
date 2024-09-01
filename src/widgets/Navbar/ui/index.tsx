import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/button';
import { memo, useCallback, useEffect, useState } from 'react';
import { LoginModal } from 'features/login';
import { LogoutButton } from 'features/logout';
import { selectIsAuth } from 'entities/user';
import { useSelector } from 'react-redux';

type NavbarProps = {
    className?: string;
    handlerDrawer?: () => void;
};

export const Navbar = memo(({ className, handlerDrawer }: NavbarProps) => {
    const { t } = useTranslation('navigation');
    const isAuth = useSelector(selectIsAuth);

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
        <div className={classNames(cls.navbar, {}, [className])}>
            <FontAwesomeIcon
                icon={faBars}
                onClick={handlerDrawer}
                className={classNames(cls.btnMenu)}
            />

            {isAuth ? (
                <LogoutButton />
            ) : (
                <>
                    <Button
                        onClick={handleLoginModalOpen}
                        variant={ButtonVariants.outlined}
                    >
                        {t('Авторизоваться')}
                    </Button>

                    <LoginModal
                        isOpen={isLoginModal}
                        onClose={handleLoginModalClose}
                    />
                </>
            )}
        </div>
    );
});
