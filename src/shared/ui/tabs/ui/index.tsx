import cls from './index.module.scss';
import { classNames } from 'shared/lib/class-names';
import { typedMemo } from 'shared/lib/typed-memo';
import { Button, ButtonVariants } from 'shared/ui/button';

type TabItem<T> = {
    key: T;
    label: string;
};

type TabsProps<T> = {
    className?: string;
    activeKey: string;
    items: TabItem<T>[];
    onChange?: (key: T) => void;
};

const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
    const { className, activeKey, items = [], onChange } = props;

    const handleClick = (key: T) => () => {
        onChange?.(key);
    };

    return (
        <div
            className={classNames(cls.wrapper, {}, [className])}
            data-testid='tabs'
        >
            {items.map((i) => (
                <Button
                    key={i.key}
                    className={cls.tab}
                    onClick={handleClick(i.key)}
                    variant={
                        activeKey === i.key
                            ? ButtonVariants.clear
                            : ButtonVariants.outlined
                    }
                >
                    {i.label}
                </Button>
            ))}
        </div>
    );
});

export { Tabs };
