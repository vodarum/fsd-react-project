import {
    ArticleList,
    articleListActions,
    articleListReducer,
    articleListSelectors,
    ArticleViewType,
    fetchList,
} from 'entities/article';
import { ArticleViewSwitcher } from 'features/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from 'shared/lib/hooks';
import cls from './index.module.scss';

const Articles = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(articleListSelectors.selectAll);
    const loading = useSelector(articleListSelectors.selectLoading);
    const error = useSelector(articleListSelectors.selectError);
    const view = useSelector(articleListSelectors.selectView);

    const handleArticleViewBtnClick = useCallback(
        (view: ArticleViewType) => dispatch(articleListActions.setView(view)),
        [dispatch],
    );

    useAsyncStore({
        articleList: articleListReducer,
    });

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchList());
    }, []);

    return (
        <>
            <h1 className={cls.title}>{t('Статьи')}</h1>

            <ArticleViewSwitcher
                onViewClick={handleArticleViewBtnClick}
                view={view}
            />

            <ArticleList
                items={articles}
                error={error}
                loading={loading}
                view={view}
            />
        </>
    );
};

export default memo(Articles);
