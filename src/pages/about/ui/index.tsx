import { Title } from '@/shared/ui/title';
import { Section } from '@/widgets/section';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');
    return (
        <Section>
            <Title>{t('O сайте')}</Title>
        </Section>
    );
};

export default About;
