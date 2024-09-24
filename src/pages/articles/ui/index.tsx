import { useTranslation } from 'react-i18next';

const Articles = () => {
    const { t } = useTranslation('articles');
    return <h1>{t('Статьи')}</h1>;
};

export default Articles;
