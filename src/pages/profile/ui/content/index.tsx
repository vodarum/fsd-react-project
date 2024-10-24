import cls from './index.module.scss';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '@/shared/ui/loader';
import { Text } from '@/shared/ui/text';
import { ProfileButtonBar } from '../button-bar';
import { ProfileCard } from '../card';
import { userSelectors } from '@/features/user';
import { sessionSelectors } from '@/entities/session';

export const ProfilePageContent = memo(() => {
    const session = useSelector(sessionSelectors.selectSessionData);
    const data = useSelector(userSelectors.selectUserData);
    const loading = useSelector(userSelectors.selectLoading);
    const error = useSelector(userSelectors.selectError);

    if (loading) {
        return (
            <div className={cls.wrapper}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cls.wrapper}>
                <Text className='text-error'>{error}</Text>
            </div>
        );
    }

    return (
        <>
            {data?.id && session?.userId && data.id === session.userId && (
                <ProfileButtonBar />
            )}
            <ProfileCard />
        </>
    );
});
