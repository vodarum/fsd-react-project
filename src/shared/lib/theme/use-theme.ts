import { useContext } from 'react';
import { Theme, THEME_LS_KEY, ThemeContext, Themes } from './theme-context';

type UseThemeResult = {
    theme: Theme;
    toggleTheme: (theme: Theme) => void;
};

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = (theme: Theme) => {
        setTheme?.(theme);
        localStorage.setItem(THEME_LS_KEY, theme);
    };

    return { theme: theme || Themes.light, toggleTheme };
};
