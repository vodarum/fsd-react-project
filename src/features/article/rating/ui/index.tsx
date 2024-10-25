import { RatingCard, type Rating } from '@/entities/rating';
import { type PropsWithClassName } from '@/shared/api';
import { useCreateRatingMutation, useGetRatingQuery } from '../api';
import { useSelector } from 'react-redux';
import { sessionSelectors } from '@/entities/session';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/shared/ui/skeleton';

type ArticleRatingProps = PropsWithClassName & {
    articleId: number;
};

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation('article');
    const userId = useSelector(sessionSelectors.selectSessionUserId);

    if (!userId) throw new Error();

    const { data, isLoading } = useGetRatingQuery({
        userId,
        articleId,
    });

    const [createRating] = useCreateRatingMutation();

    const handleRatingSubmit = useCallback(
        (value: Rating) => {
            try {
                createRating({
                    ...value,
                    userId,
                    articleId,
                });
            } catch (e) {
                console.error(e);
            }
        },
        [userId, articleId, createRating],
    );

    if (isLoading) return <Skeleton width='100%' height={120} active />;

    return (
        <RatingCard
            className={className}
            data={data}
            title={t('Оцените статью')}
            feedbackTitle={t('Почему Вы поставили такую оценку?')}
            onSubmit={handleRatingSubmit}
        />
    );
});

export default ArticleRating;
