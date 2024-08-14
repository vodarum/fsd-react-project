import "./styles/index.scss";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { About } from "pages/about";
import { Main } from "pages/main";
import { Themes, useTheme } from "shared/lib/theme";
import { classNames } from "shared/lib/classNames/classNames";

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

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"/about"} element={<About />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
