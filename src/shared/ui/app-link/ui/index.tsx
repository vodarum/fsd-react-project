import { classNames } from '@/shared/lib/class-names';
import cls from './index.module.scss';
import { ForwardedRef, forwardRef, memo, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const AppLinkVariants = {
    bordered: 'bordered',
} as const;

type AppLinkVariant = (typeof AppLinkVariants)[keyof typeof AppLinkVariants];

type AppLinkProps = PropsWithChildren &
    LinkProps & {
        className?: string;
        variant?: AppLinkVariant;
        linkType?: 'anchor' | 'route';
    };

const AppLink = memo(
    forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            children,
            className,
            variant,
            linkType = 'route',
            to,
            ...otherProps
        } = props;

        if (linkType === 'route') {
            return (
                <Link
                    className={classNames(cls.applink, {}, [
                        className,
                        variant && cls[variant],
                    ])}
                    to={to}
                    ref={ref}
                    {...otherProps}
                >
                    {children}
                </Link>
            );
        }

        return (
            <a
                className={classNames(cls.applink, {}, [
                    className,
                    variant && cls[variant],
                ])}
                href={to as string}
                ref={ref}
                {...otherProps}
            >
                {children}
            </a>
        );
    }),
);

export { AppLink, AppLinkVariants };
