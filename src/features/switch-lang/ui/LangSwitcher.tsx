import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { Button, ButtonVariants } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

type LangSwitcherProps = {
  className?: string;
  short?: boolean;
};

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const handleClick = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            onClick={handleClick}
            variant={ButtonVariants.clear}
            className={classNames(cls.langSwitcher, {}, [className])}
        >
            {short ? t("Короткий язык") : t("Язык")}
        </Button>
    );
};
