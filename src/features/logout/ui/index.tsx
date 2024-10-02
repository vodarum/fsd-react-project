import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Button } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { sessionActions } from 'entities/session';
import { memo, useCallback } from 'react';

type LogoutButtonProps = {
    className?: string;
};

export const LogoutButton = memo(({ className }: LogoutButtonProps) => {
    const { t } = useTranslation('navigation');
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
        dispatch(sessionActions.resetData());
    }, [dispatch]);

    return (
        <Button
            className={classNames(cls.logoutButton, {}, [className])}
            onClick={handleClick}
        >
            {t('Выйти')}
        </Button>
    );
});
