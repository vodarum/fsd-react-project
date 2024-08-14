import { About } from "pages/about";
import { Main } from "pages/main";
import { Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { appRoutes, appRoutePaths } from "../config";

const routeConfig: RouteObject[] = [
  {
    path: appRoutePaths[appRoutes.main],
    element: <Main />,
  },
  {
    path: appRoutePaths[appRoutes.about],
    element: <About />,
  },
] as const;

export const AppRouter = () => {
  const routeElements = useRoutes(routeConfig);
  return <Suspense fallback={<h1>Loading...</h1>}>{routeElements}</Suspense>;
};
