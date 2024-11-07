import { PropsWithClassName } from '@/shared/api';
import {
    ImgHTMLAttributes,
    memo,
    ReactNode,
    useLayoutEffect,
    useState,
} from 'react';

type AppImageProps = PropsWithClassName &
    ImgHTMLAttributes<HTMLImageElement> & {
        fallback?: ReactNode;
        errorFallback?: ReactNode;
    };

const AppImageBase = memo((props: AppImageProps) => {
    const { className, src, fallback, errorFallback, ...otherProps } = props;
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setLoading(false);
            setHasError(false);
        };
        img.onerror = () => {
            setLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (loading && fallback) return fallback;
    if (hasError && errorFallback) return errorFallback;
    return <img className={className} src={src} {...otherProps} />;
});

const AppImageStorybook = memo((props: AppImageProps) => {
    const { src, errorFallback, ...otherProps } = props;

    if (!src && errorFallback) return errorFallback;
    return <img src={src} {...otherProps} />;
});

export const AppImage = memo((props: AppImageProps) => {
    const { alt = 'image', ...otherProps } = props;

    return __PROJECT__ === 'storybook' ? (
        <AppImageStorybook alt={alt} {...otherProps} />
    ) : (
        <AppImageBase alt={alt} {...otherProps} />
    );
});
