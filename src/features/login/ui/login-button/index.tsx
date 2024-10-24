import { useCallback, useEffect, useState } from 'react';
import { sessionSelectors } from 'entities/session';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { LoginModal } from '../login-modal';

type LoginButtonProps = {
    className?: string;
};

export const LoginButton = ({ className }: LoginButtonProps) => {
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
        <>
            <Button className={className} onClick={handleLoginModalOpen}>
                {t('Авторизоваться')}
            </Button>

            <LoginModal open={isLoginModal} onClose={handleLoginModalClose} />
        </>
    );
};
