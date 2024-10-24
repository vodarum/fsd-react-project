import { classNames } from '@/shared/lib/class-names';
import { Theme, ThemeIcons, Themes, useTheme } from '@/shared/lib/theme';
import { Button, ButtonVariants } from '@/shared/ui/button';
import { Text } from '@/shared/ui/text';
import cls from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type ThemeSwitcherProps = {
    className?: string;
};

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const themeTranslates = {
        [Themes.dark]: t('Темная'),
        [Themes.halloween]: t('Хэллоуин'),
        [Themes.light]: t('Светлая'),
        [Themes.nature]: t('Природа'),
        [Themes.magic]: t('Магия'),
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <Text className={cls.title}>{t('Тема')}</Text>

            <div className={cls.btnGroup}>
                {Object.entries(ThemeIcons).map(([themeKey, themeIcon]) => (
                    <Button
                        key={themeKey}
                        className={cls.btn}
                        onClick={() => toggleTheme(themeKey as Theme)}
                        variant={ButtonVariants.clear}
                    >
                        <span
                            className={classNames(cls.radio, {
                                [cls.checked]: theme === themeKey,
                            })}
                        />
                        <FontAwesomeIcon icon={themeIcon} />
                        <span>{themeTranslates[themeKey as Theme]}</span>
                    </Button>
                ))}
            </div>
        </div>
    );
});
