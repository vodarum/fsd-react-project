import { CSSProperties, memo, useMemo } from 'react';
import Image from './image.jpg';

const AvatarShapes = {
    circle: 'circle',
    square: 'square',
} as const;

type AvatarProps = {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    shape?: (typeof AvatarShapes)[keyof typeof AvatarShapes];
};

const Avatar = memo(
    ({
        className,
        src = Image,
        alt,
        size,
        shape = AvatarShapes.circle,
    }: AvatarProps) => {
        const style: CSSProperties = useMemo(
            () => ({
                width: size ? `${size}px` : '100px',
                height: size ? `${size}px` : '100px',
                borderRadius: shape === AvatarShapes.square ? `5%` : '50%',
            }),
            [size, shape],
        );

        return <img className={className} style={style} src={src} alt={alt} />;
    },
);

export { Avatar, AvatarShapes };
