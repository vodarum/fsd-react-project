import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';
import { fetchProfileData, profileReducer } from '../../model';
import { Title } from 'shared/ui/title';
import { ProfilePageContent } from '../content';

const Profile = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    useAsyncStore({
        profile: profileReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        if (id) dispatch(fetchProfileData(+id));
    }, [dispatch]);

    return (
        <>
            <Title className={cls.title}>{t('Профиль')}</Title>
            <ProfilePageContent />
        </>
    );
};

export default Profile;
