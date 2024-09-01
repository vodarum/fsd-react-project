import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, PropsWithChildren } from 'react';

const AppLinkVariants = {
    bordered: 'bordered',
} as const;

type AppLinkVariant = (typeof AppLinkVariants)[keyof typeof AppLinkVariants];

type AppLinkProps = PropsWithChildren &
    LinkProps & {
        className?: string;
        variant?: AppLinkVariant;
    };

const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const { children, className, variant, ...otherProps } = props;

    return (
        <Link
            className={classNames(cls.applink, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export { AppLink, AppLinkVariants };
