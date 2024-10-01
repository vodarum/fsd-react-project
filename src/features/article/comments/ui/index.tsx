import { memo } from 'react';
import { CommentList } from 'entities/comment';
import { fetchByArticleId } from '../model/services';
import { useSelector } from 'react-redux';
import {
    articleCommentsReducer,
    articleCommentsSelectors,
    selectLoading,
} from '../model';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';

type ArticleCommentsProps = {
    className?: string;
    articleId: number;
};

export const ArticleComments = memo(
    ({ className, articleId }: ArticleCommentsProps) => {
        const dispatch = useAppDispatch();
        const comments = useSelector(articleCommentsSelectors.selectAll);
        const loading = useSelector(selectLoading);

        useAsyncStore({
            articleComments: articleCommentsReducer,
        });

        useInitialEffect(() => {
            // @ts-ignore
            dispatch(fetchByArticleId(articleId));
        }, [articleId]);

        return (
            <CommentList
                className={className}
                items={comments}
                loading={loading}
            />
        );
    },
);
