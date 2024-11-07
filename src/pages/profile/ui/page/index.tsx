import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '@/shared/ui/title';
import { ProfilePageContent } from '../content';
import { Section } from '@/widgets/section';

const Profile = () => {
    const { t } = useTranslation('profile');

    return (
        <Section data-testid='profilePage'>
            <Title className={cls.title}>{t('Профиль')}</Title>
            <ProfilePageContent />
        </Section>
    );
};

export default Profile;
