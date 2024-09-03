import { useContext } from 'react';
import { Theme, THEME_LS_KEY, ThemeContext, Themes } from './theme-context';

type UseThemeResult = {
    theme: Theme;
    toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
        setTheme?.(newTheme);
        localStorage.setItem(THEME_LS_KEY, newTheme);
    };

    return { theme: theme || Themes.light, toggleTheme };
};
