import { profileReducer } from 'entities/profile';
import { useTranslation } from 'react-i18next';
import { withAsyncStore } from 'shared/lib/with-async-store';

const Profile = withAsyncStore(
    () => {
        const { t } = useTranslation('profile');
        return <h1>{t('Профиль')}</h1>;
    },
    {
        profile: profileReducer,
    },
);

export default Profile;
