import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text';
import cls from './index.module.scss';
import { CommentCard, CommentCardSkeleton } from '../card';
import { Comment } from '../../model';

type CommentListProps = {
    className?: string;
    items?: Comment[];
    loading?: boolean;
};

export const CommentList = memo(
    ({ className, items, loading }: CommentListProps) => {
        const { t } = useTranslation();

        if (loading) {
            return (
                <div className={className}>
                    <Text className={cls.title}>{t('Комментарии')}</Text>
                    <div className={cls.items}>
                        <CommentCardSkeleton className={cls.item} />
                        <CommentCardSkeleton className={cls.item} />
                        <CommentCardSkeleton className={cls.item} />
                    </div>
                </div>
            );
        }

        return (
            <div className={className}>
                <Text className={cls.title}>{t('Комментарии')}</Text>
                <div className={cls.items}>
                    {items?.length ? (
                        items.map((i) => (
                            <CommentCard
                                key={i.id}
                                data={i}
                                className={cls.item}
                            />
                        ))
                    ) : (
                        <Text>{t('Комментарии отсутствуют')}</Text>
                    )}
                </div>
            </div>
        );
    },
);
