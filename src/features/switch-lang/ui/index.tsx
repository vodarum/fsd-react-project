import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Dropdown, type DropdownItem } from 'shared/ui/popups';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const langs = {
    ru: 'Русский',
    en: 'Английский',
} as const;

type LangSwitcherProps = {
    className?: string;
};

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const handleClick = useCallback(
        (lang: string) => () => {
            i18n.changeLanguage(lang);
        },
        [i18n],
    );

    const items = useMemo(
        () =>
            Object.entries(langs).map<DropdownItem>(([k, v]) => ({
                content: t(v),
                onClick: handleClick(k),
                active: i18n.language === k,
            })),
        [i18n, t, handleClick],
    );

    return (
        <Dropdown
            className={classNames(cls.langSwitcher, {}, [className])}
            anchor='bottom end'
            activator={<FontAwesomeIcon icon={faLanguage} />}
            items={items}
        />
    );
});
