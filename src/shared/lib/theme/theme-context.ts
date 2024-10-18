import {
    faHatWizard,
    faLeaf,
    faMoon,
    faSkull,
    faSun,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { createContext } from 'react';

const THEME_LS_KEY = '026f69982e81a913f6f63af0ccb4e1b1';

const Themes = {
    dark: 'dark',
    light: 'light',
    magic: 'magic',
    nature: 'nature',
    halloween: 'halloween',
} as const;

const ThemeIcons: Record<Theme, IconDefinition> = {
    [Themes.light]: faSun,
    [Themes.dark]: faMoon,
    [Themes.magic]: faHatWizard,
    [Themes.nature]: faLeaf,
    [Themes.halloween]: faSkull,
} as const;

type Theme = (typeof Themes)[keyof typeof Themes];

type ThemeContextProps = Partial<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
}>;

const ThemeContext = createContext<ThemeContextProps>({});

export { type Theme, THEME_LS_KEY, ThemeContext, ThemeIcons, Themes };
