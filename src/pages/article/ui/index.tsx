import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
    ArticleDetails,
    ArticleList,
    ArticleViewTypes,
} from 'entities/article';
import {
    articleCommentsReducer,
    articleCommentsSelectors,
    articleRecommendationsReducer,
    articleRecommendationsSelectors,
    fetchByArticleId,
    fetchRecommendations,
} from 'features/article';
import { CommentForm } from 'features/comment';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';
import { Text } from 'shared/ui/text';
import cls from './index.module.scss';
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
    const commentsLoading = useSelector(articleCommentsSelectors.selectLoading);

    const recommendations = useSelector(
        articleRecommendationsSelectors.selectAll,
    );
    const recommendationsLoading = useSelector(
        articleRecommendationsSelectors.selectLoading,
    );

    const handleCommentSubmit = useCallback(
        (comment: string) => {
            // @ts-ignore
            dispatch(addComment(comment));
        },
        [dispatch],
    );

    useAsyncStore({
        articleComments: articleCommentsReducer,
        articleRecommendations: articleRecommendationsReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchByArticleId(+id));
        // @ts-ignore
        dispatch(fetchRecommendations());
    }, [id]);

    return (
        <Section>
            <ArticleDetails id={+id} />

            <Text className={cls.recommendationsTitle}>{t('Рекомендуем')}</Text>
            <ArticleList
                className={cls.recommendationsList}
                items={recommendations}
                loading={recommendationsLoading}
                openInNewTab={true}
                view={ArticleViewTypes.slider}
            />

            <CommentList
                items={comments}
                loading={commentsLoading}
                form={<CommentForm onSubmit={handleCommentSubmit} />}
            />
        </Section>
    );
};

export default Article;
