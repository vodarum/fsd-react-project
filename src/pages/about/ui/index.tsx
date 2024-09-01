import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');
    return <h1>{t('O сайте')}</h1>;
};

export default About;
