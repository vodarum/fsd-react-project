import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/text';
import cls from './index.module.scss';
import { CommentCard, CommentCardSkeleton } from '../card';
import { Comment } from '../../model';
import { VStack } from 'shared/ui/stack';

type CommentListProps = {
    className?: string;
    form?: ReactNode;
    items?: Comment[];
    loading?: boolean;
};

export const CommentList = memo(
    ({ className, form, items, loading }: CommentListProps) => {
        const { t } = useTranslation();

        if (loading) {
            return (
                <VStack className={className} align='stretch' gap={16}>
                    <Text className={cls.title}>{t('Комментарии')}</Text>
                    <VStack align='stretch' gap={8}>
                        <CommentCardSkeleton />
                        <CommentCardSkeleton />
                        <CommentCardSkeleton />
                    </VStack>
                </VStack>
            );
        }

        return (
            <VStack className={className} align='stretch' gap={16}>
                <Text className={cls.title}>{t('Комментарии')}</Text>
                {form}
                <VStack align='stretch' gap={8}>
                    {items?.length ? (
                        items.map((i) => <CommentCard key={i.id} data={i} />)
                    ) : (
                        <Text>{t('Комментарии отсутствуют')}</Text>
                    )}
                </VStack>
            </VStack>
        );
    },
);
