import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

type LoaderProps = {
    className?: string;
};

const Loader: FC<LoaderProps> = ({ className }) => (
    <span className={classNames(cls.loader, {}, [className])} />
);

export { Loader };
