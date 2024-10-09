import {
    ArticleList,
    articleListActions,
    articleListReducer,
    articleListSelectors,
    ArticleViewType,
    fetchListPart,
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
import { Section } from 'widgets/section';
import cls from './index.module.scss';
import { init } from '../model';

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

    const handlePageScrollEnd = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            // @ts-ignore
            dispatch(fetchListPart());
        }
    }, [dispatch]);

    useAsyncStore(
        {
            articleList: articleListReducer,
        },
        false,
    );

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(init());
    }, []);

    return (
        <Section onScrollEnd={handlePageScrollEnd}>
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
        </Section>
    );
};

export default memo(Articles);
