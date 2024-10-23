import { memo } from 'react';
import { VStack } from 'shared/ui/stack';
import { Skeleton } from 'shared/ui/skeleton';
import { NotificationItem } from '../item';
import { useGetNotificationsQuery } from '../../api';

type NotificationListProps = {
    className?: string;
};

const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useGetNotificationsQuery(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap={8} className={className}>
                <Skeleton active width={170} height={70} />
                <Skeleton active width={170} height={70} />
                <Skeleton active width={170} height={70} />
            </VStack>
        );
    }

    return (
        <VStack gap={8} className={className}>
            {data?.map((n) => <NotificationItem key={n.id} data={n} />)}
        </VStack>
    );
});

export { NotificationList };
