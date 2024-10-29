import { Title } from '@/shared/ui/title';
import { Section } from '@/widgets/section';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation('not-found');
    return (
        <Section>
            <Title>{t('Страница не найдена')}</Title>
        </Section>
    );
};

export default NotFound;
