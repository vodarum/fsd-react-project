import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Input, InputVariants } from 'shared/ui/input';
import { Button, ButtonVariants } from 'shared/ui/button';
import { Text } from 'shared/ui/text';
import { Title, TitleLevels } from 'shared/ui/title';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import {
    loginActions,
    loginByUsername,
    loginReducer,
    loginSelectors,
} from 'features/login/model';
import { withAsyncStore } from 'shared/lib/with-async-store';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';

type indexProps = {
    className?: string;
    isOpen?: boolean;
};

const LoginForm = withAsyncStore(
    memo(({ className, isOpen }: indexProps) => {
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            dispatch(loginByUsername({ username, password }));
        }, [dispatch, username, password]);

        return (
            <form className={classNames(cls.loginForm, {}, [className])}>
                <Title level={TitleLevels.H4}>{t('Форма авторизации')}</Title>

                {error && <Text className='text-error'>{error}</Text>}

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
    }),
    {
        login: loginReducer,
    },
);

export default LoginForm;
