import {
    ArticleList,
    articleListReducer,
    articleListSelectors,
    fetchListPart,
} from '@/entities/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    useAppDispatch,
    useAsyncStore,
    useInitialEffect,
} from '@/shared/lib/hooks';
import { Section } from '@/widgets/section';
import cls from './index.module.scss';
import { init } from '../../model';
import { ArticlesFilters } from '../filters';

const Articles = () => {
    const { t } = useTranslation('articles');
    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();
    const articles = useSelector(articleListSelectors.selectAll);
    const loading = useSelector(articleListSelectors.selectLoading);
    const error = useSelector(articleListSelectors.selectError);
    const view = useSelector(articleListSelectors.selectView);

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
        dispatch(init(searchParams));
    }, []);

    return (
        <Section onScrollEnd={handlePageScrollEnd} data-testid='articlesPage'>
            <h1 className={cls.title}>{t('Статьи')}</h1>

            <ArticlesFilters />

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
