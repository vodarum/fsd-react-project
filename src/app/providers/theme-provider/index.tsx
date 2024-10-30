import { PropsWithChildren, useMemo, useState } from 'react';
import { Theme, THEME_LS_KEY, ThemeContext, Themes } from '@/shared/lib/theme';

const defaultTheme: Theme =
    (localStorage.getItem(THEME_LS_KEY) as Theme) || Themes.light;

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
