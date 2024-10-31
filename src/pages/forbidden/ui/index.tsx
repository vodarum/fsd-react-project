import { Title } from '@/shared/ui/title';
import { Section } from '@/widgets/section';
import { useTranslation } from 'react-i18next';

const Forbidden = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Title>{t('У вас нет доступа к этой странице')}</Title>
        </Section>
    );
};

export default Forbidden;
