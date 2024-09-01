import { classNames } from 'shared/lib/class-names';
import cls from './index.module.scss';
import { Button, ButtonVariants } from 'shared/ui//button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

type LangSwitcherProps = {
    className?: string;
    short?: boolean;
};

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const handleClick = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={handleClick}
            variant={ButtonVariants.clear}
            className={classNames(cls.langSwitcher, {}, [className])}
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
});
