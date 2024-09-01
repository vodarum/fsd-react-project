import { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';

type LoaderProps = {
    className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => (
    <span className={classNames(cls.loader, {}, [className])} />
);

export { Loader };
