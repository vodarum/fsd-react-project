import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';
import { fetchProfileData, profileReducer } from '../model';
import { Title } from 'shared/ui/title';
import { ProfilePageContent } from './content';

const Profile = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useAsyncStore({
        profile: profileReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <>
            <Title className={cls.title}>{t('Профиль')}</Title>
            <ProfilePageContent />
        </>
    );
};

export default Profile;
