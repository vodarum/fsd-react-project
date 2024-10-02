import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Article as ArticleDetails } from 'entities/article';
import { ArticleComments } from 'features/article';
import { CommentForm } from 'features/comment';
import { useAppDispatch } from 'shared/lib/hooks';
import { Text } from 'shared/ui/text';
import { addComment } from '../model';

const Article = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) return <Text>{t('Статья не найдена')}</Text>;

    const dispatch = useAppDispatch();
    const handleCommentSubmit = useCallback(
        (comment: string) => {
            // @ts-ignore
            dispatch(addComment(comment));
        },
        [dispatch],
    );

    return (
        <>
            <ArticleDetails id={+id} />
            <CommentForm onSubmit={handleCommentSubmit} />
            <ArticleComments articleId={+id} />
        </>
    );
};

export default Article;
