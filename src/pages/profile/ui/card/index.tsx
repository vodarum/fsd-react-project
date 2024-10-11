import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { userActions, userSelectors, ValidateUserErrors } from 'features/user';
import { Countries, Country, Currencies, Currency } from 'shared/api';
import { useAppDispatch } from 'shared/lib/hooks';
import { Avatar } from 'shared/ui/avatar';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import { Text } from 'shared/ui/text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

type ProfileCardProps = {
    className?: string;
};

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const form = useSelector(userSelectors.selectUserForm);
    const editable = useSelector(userSelectors.selectEditable);
    const validateErrors = useSelector(userSelectors.selectValidateErrors);
    const validateErrorTranslates = {
        [ValidateUserErrors.invalidLocationData]: t(
            'Некорректные город или страна',
        ),
        [ValidateUserErrors.invalidUserData]: t('Некорректные имя или фамилия'),
        [ValidateUserErrors.noData]: t('Отсутствуют данные'),
        [ValidateUserErrors.serverError]: t(
            'Ошибка при попытке сохранить данные',
        ),
    };

    const handleFirstnameInputChange = useCallback(
        (value?: string) => {
            dispatch(userActions.setForm({ firstName: value || '' }));
        },
        [dispatch],
    );

    const handleLastnameInputChange = useCallback(
        (value?: string) => {
            dispatch(userActions.setForm({ lastName: value || '' }));
        },
        [dispatch],
    );

    const handleBirthdayInputChange = useCallback(
        (value?: string) => {
            dispatch(userActions.setForm({ birthday: value || '' }));
        },
        [dispatch],
    );

    const handleCountryInputChange = useCallback(
        (value?: Country) => {
            dispatch(userActions.setForm({ country: value }));
        },
        [dispatch],
    );

    const handleCurrencyInputChange = useCallback(
        (value?: Currency) => {
            dispatch(userActions.setForm({ currency: value }));
        },
        [dispatch],
    );

    const handleCityInputChange = useCallback(
        (value?: string) => {
            dispatch(userActions.setForm({ city: value || '' }));
        },
        [dispatch],
    );

    const handleUsernameInputChange = useCallback(
        (value?: string) => {
            dispatch(userActions.setForm({ username: value || '' }));
        },
        [dispatch],
    );

    return (
        <div
            className={classNames(cls.card, { [cls.editable]: editable }, [
                className,
            ])}
        >
            {validateErrors?.length &&
                validateErrors.map((e) => (
                    <Text key={e} className='text-error'>
                        {validateErrorTranslates[e]}
                    </Text>
                ))}

            <Avatar className={cls.avatar} src={form?.avatar} />

            <Input
                label={t('Имя')}
                value={form?.firstName}
                onChange={handleFirstnameInputChange}
                disabled={!editable}
            />
            <Input
                label={t('Фамилия')}
                value={form?.lastName}
                onChange={handleLastnameInputChange}
                disabled={!editable}
            />
            <Input
                label={t('Дата рождения')}
                value={form?.birthday}
                type='date'
                onChange={handleBirthdayInputChange}
                disabled={!editable}
            />
            <Select
                label={t('Страна')}
                value={form?.country}
                options={Object.entries(Countries).map(([k, v]) => ({
                    value: k as Country,
                    text: v,
                }))}
                onChange={handleCountryInputChange}
                disabled={!editable}
            />
            <Select
                label={t('Валюта')}
                value={form?.currency}
                options={Object.entries(Currencies).map(([k, v]) => ({
                    value: k as Currency,
                    text: v,
                }))}
                onChange={handleCurrencyInputChange}
                disabled={!editable}
            />
            <Input
                label={t('Город')}
                value={form?.city}
                onChange={handleCityInputChange}
                disabled={!editable}
            />
            <Input
                label={t('Имя пользователя')}
                value={form?.username}
                onChange={handleUsernameInputChange}
                disabled={!editable}
            />
        </div>
    );
});
