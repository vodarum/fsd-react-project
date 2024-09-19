import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';
import { Text } from 'shared/ui/text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import {
    profileActions,
    profileSelectors,
    ValidateProfileErrors,
} from '../../model';
import { Countries, Country, Currencies, Currency } from 'shared/api';
import { useAppDispatch } from 'shared/lib/hooks';

type ProfileCardProps = {
    className?: string;
};

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const form = useSelector(profileSelectors.selectProfileForm);
    const editable = useSelector(profileSelectors.selectEditable);
    const validateErrors = useSelector(profileSelectors.selectValidateErrors);
    const validateErrorTranslates = {
        [ValidateProfileErrors.invalidLocationData]: t(
            'Некорректные город или страна',
        ),
        [ValidateProfileErrors.invalidUserData]: t(
            'Некорректные имя или фамилия',
        ),
        [ValidateProfileErrors.noData]: t('Отсутствуют данные'),
        [ValidateProfileErrors.serverError]: t(
            'Ошибка при попытке сохранить данные',
        ),
    };

    const handleFirstnameInputChange = useCallback(
        (value?: string) => {
            dispatch(profileActions.setForm({ firstName: value || '' }));
        },
        [dispatch],
    );

    const handleLastnameInputChange = useCallback(
        (value?: string) => {
            dispatch(profileActions.setForm({ lastName: value || '' }));
        },
        [dispatch],
    );

    const handleBirthdayInputChange = useCallback(
        (value?: string) => {
            dispatch(profileActions.setForm({ birthday: value || '' }));
        },
        [dispatch],
    );

    const handleCountryInputChange = useCallback(
        (value?: string) => {
            dispatch(profileActions.setForm({ country: value as Country }));
        },
        [dispatch],
    );

    const handleCurrencyInputChange = useCallback(
        (value?: string) => {
            dispatch(profileActions.setForm({ currency: value as Currency }));
        },
        [dispatch],
    );

    const handleCityInputChange = useCallback(
        (value?: string) => {
            dispatch(profileActions.setForm({ city: value || '' }));
        },
        [dispatch],
    );

    const handleUsernameInputChange = useCallback(
        (value?: string) => {
            dispatch(profileActions.setForm({ username: value || '' }));
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
                    value: k,
                    text: v,
                }))}
                onChange={handleCountryInputChange}
                disabled={!editable}
            />
            <Select
                label={t('Валюта')}
                value={form?.currency}
                options={Object.entries(Currencies).map(([k, v]) => ({
                    value: k,
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
