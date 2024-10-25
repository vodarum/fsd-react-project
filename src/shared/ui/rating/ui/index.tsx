import { classNames } from '@/shared/lib/class-names';
import cls from './index.module.scss';
import { memo, useCallback, useState } from 'react';
import { RatingStar } from './star';
import { PropsWithClassName } from '@/shared/api';

type RatingProps = PropsWithClassName & {
    onChange?: (value: number) => void;
    value?: number;
    size?: number;
};

const stars = Array(5)
    .fill(0)
    .map((_, idx) => idx + 1);

export const Rating = memo((props: RatingProps) => {
    const { className, onChange, value = 0, size = 30 } = props;
    const [current, setCurrent] = useState(value);

    const handleMouseEnter = useCallback(
        (idx: number) => () => {
            if (value) return;
            setCurrent(idx);
        },
        [value, setCurrent],
    );

    const handleMouseLeave = useCallback(() => {
        if (value) return;
        setCurrent(0);
    }, [value, setCurrent]);

    const handleClick = useCallback(
        (idx: number) => () => {
            if (value) return;
            onChange?.(idx);
        },
        [value, onChange],
    );

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starIdx) => (
                <RatingStar
                    key={starIdx}
                    width={size}
                    height={size}
                    className={classNames(cls.star, {
                        [cls.filled]: current >= starIdx,
                        [cls.selected]: !!value,
                    })}
                    onMouseEnter={handleMouseEnter(starIdx)}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick(starIdx)}
                />
            ))}
        </div>
    );
});
