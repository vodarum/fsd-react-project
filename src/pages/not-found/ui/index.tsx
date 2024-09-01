import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation('not-found');
    return <h1>{t('Страница не найдена')}</h1>;
};

export default NotFound;
