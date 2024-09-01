import { classNames } from 'shared/lib/class-names';
import { Loader } from 'shared/ui/loader';
import cls from './index.module.scss';

type PageLoaderProps = {
    className?: string;
};

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
