import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Input, InputVariants } from 'shared/ui/input';
import { Button, ButtonVariants } from 'shared/ui/button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { profileSelectors } from '../../model';

type indexProps = {
    className?: string;
};

export const ProfileCard = memo(({ className }: indexProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(profileSelectors.selectProfileData);
    const error = useSelector(profileSelectors.selectError);
    const loading = useSelector(profileSelectors.selectLoading);

    return (
        <div className={classNames(cls.card, {}, [className])}>
            <Input
                label={t('Имя')}
                variant={InputVariants.outlined}
                value={data?.firstName}
            />
            <Input
                label={t('Фамилия')}
                variant={InputVariants.outlined}
                value={data?.lastName}
            />

            <Button className={cls.editBtn} variant={ButtonVariants.outlined}>
                {t('Редактировать')}
            </Button>
        </div>
    );
});
