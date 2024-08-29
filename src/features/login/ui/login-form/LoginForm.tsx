import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Input, InputVariants } from 'shared/ui/Input';
import { Button, ButtonVariants } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import {
    loginActions,
    loginByUsername,
    loginSelectors,
} from 'features/login/model';
import { useAppDispatch } from 'app/providers/StoreProvider/store';

type indexProps = {
    className?: string;
    isOpen?: boolean;
};

const LoginForm = memo(({ className, isOpen }: indexProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(loginSelectors.selectUsername);
    const password = useSelector(loginSelectors.selectPassword);
    const error = useSelector(loginSelectors.selectError);
    const loading = useSelector(loginSelectors.selectLoading);

    const handleUsernameInputChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const handlePasswordInputChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const handleSubmitBtnClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            {error}
            <Input
                label={t('Имя пользователя')}
                variant={InputVariants.outlined}
                autoFocus={isOpen}
                value={username}
                onChange={handleUsernameInputChange}
            />
            <Input
                label={t('Пароль')}
                type='password'
                variant={InputVariants.outlined}
                value={password}
                onChange={handlePasswordInputChange}
            />

            <Button
                className={cls.loginBtn}
                variant={ButtonVariants.outlined}
                disabled={loading}
                onClick={handleSubmitBtnClick}
            >
                {t('Авторизоваться')}
            </Button>
        </form>
    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
