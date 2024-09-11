import cls from './index.module.scss';
import { Text } from 'shared/ui/text';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { profileSelectors } from '../../model';
import { Loader } from 'shared/ui/loader';
import { ProfileButtonBar } from '../button-bar';
import { ProfileCard } from '../card';

export const ProfilePageContent = memo(() => {
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
            <ProfileButtonBar />
            <ProfileCard />
        </>
    );
});
