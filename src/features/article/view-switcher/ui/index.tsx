import { faList, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArticleViewType, ArticleViewTypes } from '@/entities/article';
import { memo } from 'react';
import { classNames } from '@/shared/lib/class-names';
import { Button, ButtonVariants } from '@/shared/ui/button';
import cls from './index.module.scss';

const viewTypeIcons = [
    {
        view: ArticleViewTypes.grid,
        icon: faTableCells,
    },
    {
        view: ArticleViewTypes.list,
        icon: faList,
    },
] as const;

type ArticleViewSwitcherProps = {
    className?: string;
    onViewClick?: (view: ArticleViewType) => void;
    view: ArticleViewType;
};

export const ArticleViewSwitcher = memo(
    ({
        className,
        onViewClick,
        view: activeView,
    }: ArticleViewSwitcherProps) => {
        const handleClick = (view: ArticleViewType) => () =>
            onViewClick?.(view);

        return (
            <div className={classNames(cls.wrapper, {}, [className])}>
                {viewTypeIcons.map(({ view, icon }) => (
                    <Button
                        className={classNames(cls.btn, {
                            [cls.active]: view === activeView,
                        })}
                        key={view}
                        onClick={handleClick(view)}
                        variant={ButtonVariants.clear}
                    >
                        <FontAwesomeIcon icon={icon} />
                    </Button>
                ))}
            </div>
        );
    },
);
