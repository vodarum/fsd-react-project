import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Logout.module.scss';
import { Button, ButtonVariants } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/user';
import { useCallback } from 'react';

type LogoutButtonProps = {
    className?: string;
};

export const LogoutButton = ({ className }: LogoutButtonProps) => {
    const { t } = useTranslation('navigation');
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
        dispatch(userActions.resetSession());
    }, [dispatch]);

    return (
        <Button
            className={classNames(cls.logoutButton, {}, [className])}
            onClick={handleClick}
            variant={ButtonVariants.outlined}
        >
            {t('Выйти')}
        </Button>
    );
};
