import { createContext } from 'react';

const THEME_LS_KEY = '026f69982e81a913f6f63af0ccb4e1b1';

const Themes = {
    dark: 'dark',
    light: 'light',
} as const;

type Theme = (typeof Themes)[keyof typeof Themes];

type ThemeContextProps = Partial<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
}>;

const ThemeContext = createContext<ThemeContextProps>({});

export { Theme, THEME_LS_KEY, ThemeContext, Themes };
