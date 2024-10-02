import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { memo } from 'react';
import { User } from '../../model';
import { Avatar } from 'shared/ui/avatar';
import { Text } from 'shared/ui/text';
import { Skeleton } from 'shared/ui/skeleton';

type UserCardBaseProps = {
    className?: string;
};

type UserCardProps = UserCardBaseProps & {
    data: User;
};

const UserCardSkeleton = memo(({ className }: UserCardBaseProps) => {
    return (
        <div className={classNames(cls.card, {}, [className])}>
            <Skeleton width={200} height={200} radius={'50%'} active />

            <div>
                <Skeleton
                    className={classNames(cls.field, {}, [cls.username])}
                    width={200}
                    height={24}
                    active
                />
                <Skeleton
                    className={cls.field}
                    width={250}
                    height={16}
                    active
                />
                <Skeleton
                    className={cls.field}
                    width={250}
                    height={16}
                    active
                />
            </div>
        </div>
    );
});

const UserCard = memo(({ className, data }: UserCardProps) => {
    return (
        <div className={classNames(cls.card, {}, [className])}>
            <Avatar src={data.avatar} size={200} />

            <div>
                <Text className={classNames(cls.field, {}, [cls.username])}>
                    {data.username}
                </Text>
                <Text className={cls.field}>
                    {data.firstName} {data.lastName}
                </Text>
                <Text className={cls.field}>
                    {data.country}, {data.city}
                </Text>
            </div>
        </div>
    );
});

export { UserCard, UserCardSkeleton };
