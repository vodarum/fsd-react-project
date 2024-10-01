import cls from './index.module.scss';
import { userSelectors } from 'entities/user';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/ui/loader';
import { Text } from 'shared/ui/text';
import { profileSelectors } from '../../model';
import { ProfileButtonBar } from '../button-bar';
import { ProfileCard } from '../card';

export const ProfilePageContent = memo(() => {
    const session = useSelector(userSelectors.selectSession);
    const data = useSelector(profileSelectors.selectProfileData);
    const loading = useSelector(profileSelectors.selectLoading);
    const error = useSelector(profileSelectors.selectError);

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
            {data?.id === session?.userId && <ProfileButtonBar />}
            <ProfileCard />
        </>
    );
});
