import cls from './index.module.scss';
import {
    articleListActions,
    articleListSelectors,
    ArticleSortField,
    ArticleType,
    ArticleTypes,
    ArticleViewType,
    fetchList,
} from '@/entities/article';
import { ArticleSortSwitcher, ArticleViewSwitcher } from '@/features/article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { SortOrder } from '@/shared/api';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import { Input } from '@/shared/ui/input';
import { Tabs } from '@/shared/ui/tabs';

export const ArticlesFilters = memo(() => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const search = useSelector(articleListSelectors.selectSearch);
    const sortBy = useSelector(articleListSelectors.selectSortBy);
    const sortOrder = useSelector(articleListSelectors.selectSortOrder);
    const type = useSelector(articleListSelectors.selectType);
    const view = useSelector(articleListSelectors.selectView);

    const typeTabs = useMemo(
        () =>
            Object.values(ArticleTypes).map((v) => ({
                key: v as ArticleType,
                label: t(v),
            })),
        [t],
    );

    const fetchData = useCallback(() => {
        // @ts-ignore
        dispatch(fetchList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const handleSearchChange = useCallback(
        (value: string) => {
            dispatch(articleListActions.setSearch(value));
            dispatch(articleListActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch],
    );

    const handleSortByChange = useCallback(
        (value: ArticleSortField) => {
            dispatch(articleListActions.setSortBy(value));
            dispatch(articleListActions.setPage(1));
            fetchData();
        },
        [dispatch],
    );

    const handleSortOrderChange = useCallback(
        (value: SortOrder) => {
            dispatch(articleListActions.setSortOrder(value));
            dispatch(articleListActions.setPage(1));
            fetchData();
        },
        [dispatch],
    );

    const handleTypeChange = useCallback(
        (value: ArticleType) => {
            dispatch(articleListActions.setType(value));
            dispatch(articleListActions.setPage(1));
            fetchData();
        },
        [dispatch],
    );

    const handleArticleViewBtnClick = useCallback(
        (view: ArticleViewType) => dispatch(articleListActions.setView(view)),
        [dispatch],
    );

    return (
        <div className={cls.wrapper}>
            <Input
                placeholder={t('Поиск')}
                value={search}
                onChange={handleSearchChange}
            />

            <Tabs
                className={cls.tabs}
                activeKey={type}
                items={typeTabs}
                onChange={handleTypeChange}
            />

            <div className={cls.switchers}>
                <ArticleSortSwitcher
                    onOrderValueChange={handleSortOrderChange}
                    onSortValueChange={handleSortByChange}
                    orderValue={sortOrder}
                    sortValue={sortBy}
                />

                <ArticleViewSwitcher
                    onViewClick={handleArticleViewBtnClick}
                    view={view}
                />
            </div>
        </div>
    );
});
