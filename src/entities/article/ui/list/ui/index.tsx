import { classNames } from '@/shared/lib/class-names';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/text';
import { ArticleCard, ArticleCardSkeleton } from '../../card';
import {
    Article,
    ArticleViewType,
    ArticlesNumberPerPage,
} from '../../../model';
import cls from './index.module.scss';

type ArticleListProps = {
    className?: string;
    error?: string;
    loading?: boolean;
    items: Article[];
    openInNewTab?: boolean;
    view: ArticleViewType;
};

const getAticleListSkeleton = (view: ArticleViewType) =>
    Array(ArticlesNumberPerPage[view])
        .fill(0)
        .map((_, i) => <ArticleCardSkeleton key={i + 1} view={view} />);

export const ArticleList = memo(
    ({
        className,
        error,
        items,
        loading,
        openInNewTab,
        view,
    }: ArticleListProps) => {
        const { t } = useTranslation();

        if (error) {
            return (
                <Text className='text-error'>{t('Неизвестная ошибка')}</Text>
            );
        }

        return (
            <div className={classNames(cls[view], {}, [className])}>
                {items.length
                    ? items.map((i) => (
                          <ArticleCard
                              key={i.id}
                              data={i}
                              view={view}
                              openInNewTab={openInNewTab}
                          />
                      ))
                    : null}
                {loading && getAticleListSkeleton(view)}
            </div>
        );
    },
);
