import { Title } from '@/shared/ui/title';
import { Section } from '@/widgets/section';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation('main');
    return (
        <Section data-testid='mainPage'>
            <Title>{t('Главная')}</Title>
        </Section>
    );
};

export default Main;
