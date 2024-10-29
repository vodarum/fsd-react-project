import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from '@/shared/lib/hooks';
import { Title } from '@/shared/ui/title';
import { ProfilePageContent } from '../content';
import { sessionSelectors } from '@/entities/session';
import { fetchById, userReducer } from '@/features/user';
import { Section } from '@/widgets/section';

const Profile = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const session = useSelector(sessionSelectors.selectSessionData);

    useAsyncStore({
        user: userReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        if (session?.userId) dispatch(fetchById(session.userId));
    }, [dispatch]);

    return (
        <Section>
            <Title className={cls.title}>{t('Профиль')}</Title>
            <ProfilePageContent />
        </Section>
    );
};

export default Profile;
