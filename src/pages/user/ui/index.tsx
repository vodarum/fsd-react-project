import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';
import { Text } from 'shared/ui/text';
import { Title } from 'shared/ui/title';
import { UserCard, UserCardSkeleton } from 'entities/user';
import { fetchById, userReducer, userSelectors } from 'features/user';

const User = () => {
    const { t } = useTranslation('user');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const user = useSelector(userSelectors.selectUserData);
    const loading = useSelector(userSelectors.selectLoading);

    useAsyncStore({
        user: userReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        if (id) dispatch(fetchById(+id));
    }, [dispatch]);

    if (loading) {
        return (
            <>
                <Title className={cls.title}>{t('Пользователь')}</Title>;
                <UserCardSkeleton />
            </>
        );
    }

    return (
        <>
            <Title className={cls.title}>{t('Пользователь')}</Title>
            {user ? (
                <UserCard data={user} />
            ) : (
                <Text className='text-error'>
                    {t('Пользователь не найден')}
                </Text>
            )}
        </>
    );
};

export default User;
