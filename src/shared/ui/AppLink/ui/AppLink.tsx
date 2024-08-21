import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';

const AppLinkVariants = {
    bordered: 'bordered',
} as const;

type AppLinkVariant = (typeof AppLinkVariants)[keyof typeof AppLinkVariants];

type AppLinkProps = PropsWithChildren &
    LinkProps & {
        className?: string;
        variant?: AppLinkVariant;
    };

const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const { children, className, variant, ...otherProps } = props;

    return (
        <Link
            className={classNames(cls.applink, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export { AppLink, AppLinkVariants };
