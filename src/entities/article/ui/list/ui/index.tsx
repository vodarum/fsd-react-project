import { classNames } from 'shared/lib/class-names';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text';
import { Article, ArticleViewType, ArticleViewTypes } from '../../../model';
import cls from './index.module.scss';
import { ArticleCard, ArticleCardSkeleton } from '../../card';

type ArticleListBaseProps = {
    className?: string;
    view: ArticleViewType;
};

type ArticleListProps = ArticleListBaseProps & {
    error?: string;
    loading?: boolean;
    items: Article[];
};

const ArticleListSkeleton = memo(
    ({ className, view }: ArticleListBaseProps) => {
        const itemsNumber = view === ArticleViewTypes.grid ? 9 : 3;
        const items = Array(itemsNumber)
            .fill(0)
            .map((_, i) => <ArticleCardSkeleton key={i + 1} view={view} />);

        return (
            <div className={classNames(cls[view], {}, [className])}>
                {items}
            </div>
        );
    },
);

export const ArticleList = memo(
    ({ className, error, items, loading, view }: ArticleListProps) => {
        const { t } = useTranslation();

        if (loading) {
            return <ArticleListSkeleton className={className} view={view} />;
        }

        if (error) {
            return <Text className='text-error'>{t('Статья не найдена')}</Text>;
        }

        return (
            <div className={classNames(cls[view], {}, [className])}>
                {items.length
                    ? items.map((i) => (
                          <ArticleCard key={i.id} data={i} view={view} />
                      ))
                    : null}
            </div>
        );
    },
);
