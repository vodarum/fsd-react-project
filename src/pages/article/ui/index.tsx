import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Article as ArticleDetails } from 'entities/article';
import {
    articleCommentsReducer,
    articleCommentsSelectors,
    fetchByArticleId,
} from 'features/article';
import { CommentForm } from 'features/comment';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';
import { Text } from 'shared/ui/text';
import { addComment } from '../model';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/comment';
import { Section } from 'widgets/section';

const Article = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) return <Text>{t('Статья не найдена')}</Text>;

    const dispatch = useAppDispatch();

    const comments = useSelector(articleCommentsSelectors.selectAll);
    const loading = useSelector(articleCommentsSelectors.selectLoading);

    const handleCommentSubmit = useCallback(
        (comment: string) => {
            // @ts-ignore
            dispatch(addComment(comment));
        },
        [dispatch],
    );

    useAsyncStore({
        articleComments: articleCommentsReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchByArticleId(+id));
    }, [id]);

    return (
        <Section>
            <ArticleDetails id={+id} />
            <CommentList
                items={comments}
                loading={loading}
                form={<CommentForm onSubmit={handleCommentSubmit} />}
            />
        </Section>
    );
};

export default Article;
