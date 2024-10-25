import { PropsWithChildren } from 'react';
import { type PropsWithClassName } from '@/shared/api';
import { classNames } from '@/shared/lib/class-names';
import { Text } from '@/shared/ui/text';
import cls from './index.module.scss';

type CardProps = PropsWithChildren &
    PropsWithClassName & {
        title?: string;
        width?: number | string;
        bordered?: boolean;
    };

export const Card = (props: CardProps) => {
    const { className, children, title, width, bordered = true } = props;

    return (
        <div
            className={classNames(
                cls.card,
                {
                    [cls.bordered]: bordered,
                },
                [className],
            )}
            style={{
                width,
            }}
        >
            {title && (
                <div className={cls.header}>
                    <Text>{title}</Text>
                </div>
            )}
            <div className={cls.body}>{children}</div>
        </div>
    );
};
