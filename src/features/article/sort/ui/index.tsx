import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { ArticleSortField, ArticleSortFields } from 'entities/article';
import { SortOrder, SortOrders } from 'shared/api';
import { Select } from 'shared/ui/select';
import { useTranslation } from 'react-i18next';
import { SelectOption } from 'shared/ui/select/ui';

type ArticleSortSwitcherProps = {
    className?: string;
    sortValue: ArticleSortField;
    onSortValueChange: (value: ArticleSortField) => void;
    orderValue: SortOrder;
    onOrderValueChange: (value: SortOrder) => void;
};

export const ArticleSortSwitcher = memo((props: ArticleSortSwitcherProps) => {
    const {
        className,
        sortValue,
        onSortValueChange,
        orderValue,
        onOrderValueChange,
    } = props;
    const { t } = useTranslation();

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortFields.createdAt,
                text: t('дате создания'),
            },
            {
                value: ArticleSortFields.title,
                text: t('названию'),
            },
            {
                value: ArticleSortFields.views,
                text: t('просмотрам'),
            },
        ],
        [t],
    );

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: SortOrders.asc,
                text: t('возрастанию'),
            },
            {
                value: SortOrders.desc,
                text: t('убыванию'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <Select
                label={t('Сортировать по')}
                value={sortValue}
                onChange={onSortValueChange}
                options={sortOptions}
            />
            <Select
                label={t('по')}
                value={orderValue}
                onChange={onOrderValueChange}
                options={orderOptions}
            />
        </div>
    );
});
