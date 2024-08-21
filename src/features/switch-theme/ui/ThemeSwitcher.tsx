import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Button, ButtonVariants } from 'shared/ui/Button';
import { Themes, useTheme } from 'shared/lib/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
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
};
