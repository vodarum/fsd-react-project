import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Themes, useTheme } from "shared/lib/theme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { foo: true, bar: false }, [theme])}>
      <button
        type="button"
        onClick={toggleTheme}
        style={{ textTransform: "uppercase" }}
      >
        {theme === Themes.light ? Themes.dark : Themes.light}
      </button>

      <div style={{ display: "flex", gap: "4px" }}>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
      </div>

      <AppRouter />
    </div>
  );
};
