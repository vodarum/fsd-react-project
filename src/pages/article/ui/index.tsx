import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/article';
import {
    articleCommentsReducer,
    articleCommentsSelectors,
    ArticleRating,
    ArticleRecommendations,
    fetchByArticleId,
} from '@/features/article';
import { CommentForm } from '@/features/comment';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/text';
import { addComment } from '../model';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/comment';
import { Section } from '@/widgets/section';
import { VStack } from '@/shared/ui/stack';

const Article = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) return <Text>{t('Статья не найдена')}</Text>;

    const dispatch = useAppDispatch();

    const comments = useSelector(articleCommentsSelectors.selectAll);
    const commentsLoading = useSelector(articleCommentsSelectors.selectLoading);

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
            <VStack align='stretch' gap={32}>
                <ArticleDetails id={+id} />
                <ArticleRecommendations />
                <ArticleRating articleId={+id} />
                <CommentList
                    items={comments}
                    loading={commentsLoading}
                    form={<CommentForm onSubmit={handleCommentSubmit} />}
                />
            </VStack>
        </Section>
    );
};

export default Article;
