import { classNames } from '@/shared/lib/class-names';
import cls from './index.module.scss';
import { CSSProperties } from 'react';

type SkeletonProps = {
    className?: string;
    active?: boolean;
    width?: number | string;
    height?: number | string;
    radius?: number | string;
};

const formatSizeParam = (value?: number | string): string | undefined =>
    typeof value === 'number' ? `${value}px` : value;

const Skeleton = (props: SkeletonProps) => {
    const { className, active, width, height, radius } = props;
    const styles: CSSProperties = {
        width: formatSizeParam(width),
        height: formatSizeParam(height),
        borderRadius: formatSizeParam(radius),
    };

    return (
        <div
            className={classNames(cls.skeleton, { [cls.active]: active }, [
                className,
            ])}
            style={styles}
        ></div>
    );
};

export { Skeleton };
