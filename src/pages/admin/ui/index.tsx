import { Title } from '@/shared/ui/title';
import { Section } from '@/widgets/section';
import { useTranslation } from 'react-i18next';

const Admin = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Title>{t('Административная панель')}</Title>
        </Section>
    );
};

export default Admin;
