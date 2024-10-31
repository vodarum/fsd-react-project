import { PropsWithClassName } from '@/shared/api';
import {
    ImgHTMLAttributes,
    memo,
    ReactNode,
    useLayoutEffect,
    useState,
} from 'react';

type ImageProps = PropsWithClassName &
    ImgHTMLAttributes<HTMLImageElement> & {
        fallback?: ReactNode;
        errorFallback?: ReactNode;
    };

export const AppImage = memo((props: ImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
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
    return <img className={className} src={src} alt={alt} {...otherProps} />;
});
