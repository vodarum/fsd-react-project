import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation("main");
  return <h1>{t("Главная")}</h1>;
};

export default Main;
