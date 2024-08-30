import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariants } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/login';
import { LogoutButton } from 'features/logout';
import { selectIsAuth } from 'entities/user/model/selectors';
import { useSelector } from 'react-redux';

type NavbarProps = {
    className?: string;
    handlerDrawer?: () => void;
};

export const Navbar = ({ className, handlerDrawer }: NavbarProps) => {
    const { t } = useTranslation('navigation');
    const isAuth = useSelector(selectIsAuth);

    const [isLoginModal, setIsLoginModal] = useState(false);

    const handleLoginModalOpen = useCallback(() => {
        setIsLoginModal(true);
    }, []);

    const handleLoginModalClose = useCallback(() => {
        setIsLoginModal(false);
    }, []);

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
};
