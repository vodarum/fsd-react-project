import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names';
import { AppLink } from '@/shared/ui/app-link';
import { Text } from '@/shared/ui/text';
import { type Notification } from '../../model/types';
import cls from './index.module.scss';

type NotificationItemProps = {
    className?: string;
    data: Notification;
};

const NotificationItem = memo(({ className, data }: NotificationItemProps) => {
    const content = (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <Text className={cls.title}>{data.title}</Text>
            <Text className={cls.description}>{data.description}</Text>
        </div>
    );

    if (data.link) {
        return (
            <AppLink linkType='anchor' to={data.link} target='_blank'>
                {content}
            </AppLink>
        );
    }

    return content;
});

export { NotificationItem };
