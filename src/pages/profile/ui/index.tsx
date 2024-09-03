import {
    fetchProfileData,
    ProfileCard,
    profileReducer,
} from 'entities/profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/use-app-dispatch';
import { withAsyncStore } from 'shared/lib/with-async-store';

const Profile = withAsyncStore(
    () => {
        const { t } = useTranslation('profile');
        const dispatch = useAppDispatch();

        useEffect(() => {
            dispatch(fetchProfileData());
        }, [dispatch]);

        return (
            <>
                <h1>{t('Профиль')}</h1>
                <ProfileCard />
            </>
        );
    },
    {
        profile: profileReducer,
    },
);

export default Profile;
