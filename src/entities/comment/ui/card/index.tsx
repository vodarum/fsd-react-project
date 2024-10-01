import cls from './index.module.scss';
import { Comment } from '../../model';
import { memo } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Avatar } from 'shared/ui/avatar';
import { Skeleton } from 'shared/ui/skeleton';
import { Text } from 'shared/ui/text';
import { AppLink } from 'shared/ui/app-link';
import { appRoutePaths } from 'app/providers/router';

type CommentCardBaseProps = {
    className?: string;
};

type CommentCardProps = CommentCardBaseProps & {
    data: Comment;
};

const avatarSize = 30;

const CommentCardSkeleton = memo(({ className }: CommentCardBaseProps) => {
    return (
        <div className={classNames(cls.card, {}, [className])}>
            <div className={cls.header}>
                <Skeleton
                    width={avatarSize}
                    height={avatarSize}
                    radius={'50%'}
                    active
                />
                <Skeleton width={200} height={16} active />
            </div>

            <Skeleton width={'100%'} height={16} className={cls.text} active />
        </div>
    );
});

const CommentCard = memo(({ className, data }: CommentCardProps) => {
    return (
        <div className={classNames(cls.card, {}, [className])}>
            <AppLink
                className={cls.header}
                to={`${appRoutePaths.profile}${data.author.id}`}
            >
                <Avatar src={data.author.avatar} size={avatarSize} />
                <Text>{data.author.name}</Text>
            </AppLink>

            <Text className={cls.text}>{data.text}</Text>
        </div>
    );
});

export { CommentCard, CommentCardSkeleton };