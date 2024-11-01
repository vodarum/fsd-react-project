import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/text';
import { Title } from '@/shared/ui/title';
import { UserCard, UserCardSkeleton } from '@/entities/user';
import { Section } from '@/widgets/section';
import { useGetUserQuery } from '../api';

const User = () => {
    const { t } = useTranslation('user');
    const { id } = useParams<{ id: string }>();

    if (!id) return null;

    const { data, isLoading } = useGetUserQuery(+id);

    if (isLoading) {
        return (
            <>
                <Title className={cls.title}>{t('Пользователь')}</Title>;
                <UserCardSkeleton />
            </>
        );
    }

    return (
        <Section>
            <Title className={cls.title}>{t('Пользователь')}</Title>
            {data ? (
                <UserCard data={data} />
            ) : (
                <Text className='text-error'>
                    {t('Пользователь не найден')}
                </Text>
            )}
        </Section>
    );
};

export default User;
