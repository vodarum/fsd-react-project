import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Button, ButtonVariants } from 'shared/ui/button';
import { Themes, useTheme } from 'shared/lib/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            variant={ButtonVariants.clear}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === Themes.light ? (
                <FontAwesomeIcon icon={faMoon} />
            ) : (
                <FontAwesomeIcon icon={faSun} />
            )}
        </Button>
    );
});
