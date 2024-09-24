import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { t } = useTranslation('articles');
    const { id } = useParams();

    return <h1>{`${t('Статья')} ${id}`}</h1>;
};

export default Article;
