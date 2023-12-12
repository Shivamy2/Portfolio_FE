/* eslint-disable react/react-in-jsx-scope */
import { lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
const Main = lazy(() => import("../pages/Main"));
const Projects = lazy(() => import("../pages/Projects"));
const Page404 = lazy(() => import("../pages/Page404"));

const Routes = () => {
  const routesArr: RouteObject[] = [
    {
      path: "*",
      element: <Navigate to={"/not-found"} />,
    },
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/projects/:id",
      element: <Projects />,
    },
    {
      path: "/not-found",
      element: <Page404 />,
    },
  ];

  const router = useRoutes(routesArr);
  return router;
};
export default Routes;
