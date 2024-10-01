import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Article as ArticleDetails } from 'entities/article';
import { ArticleComments } from 'features/article';
import { Text } from 'shared/ui/text';

const Article = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) return <Text>{t('Статья не найдена')}</Text>;

    return (
        <>
            <ArticleDetails id={+id} />
            <ArticleComments articleId={+id} />
        </>
    );
};

export default Article;
