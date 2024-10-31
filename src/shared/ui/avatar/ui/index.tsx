import { CSSProperties, memo, useMemo } from 'react';
import Image from './image.jpg';
import { PropsWithClassName } from '@/shared/api';
import { AppImage } from '../../app-image';
import { Skeleton } from '../../skeleton';

type AvatarProps = PropsWithClassName & {
    src?: string;
    alt?: string;
    size?: number;
    shape?: 'circle' | 'square';
};

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt, size, shape = 'circle' } = props;

    const width = size ? `${size}px` : '100px';
    const height = size ? `${size}px` : '100px';
    const borderRadius = shape === 'square' ? `5%` : '50%';

    const style: CSSProperties = useMemo(
        () => ({
            width,
            height,
            borderRadius,
        }),
        [size, shape],
    );

    return (
        <AppImage
            className={className}
            style={style}
            src={src}
            alt={alt}
            fallback={
                <Skeleton
                    width={width}
                    height={height}
                    radius={borderRadius}
                    active
                />
            }
            errorFallback={
                // TODO: отображается сначала fallback, затем errorFallback
                <AppImage
                    className={className}
                    style={style}
                    src={Image}
                    alt={alt}
                />
            }
        />
    );
});
