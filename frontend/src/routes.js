import React, { lazy } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));
import DashboardIcon from "@mui/icons-material/Dashboard";
import Payment from "./pages/Payment";

export const dashboardRoutes = [
  { path: "", pathname: "", name: "Dashboard", element: <Dashboard />, icon: <DashboardIcon /> },
  {
    path: "home",
    pathname: "/home",
    name: "Dashboard",
    element: <Dashboard />,
    icon: <DashboardIcon />
  },
  {
    path: "profile",
    pathname: "/profile",
    name: "Profile",
    element: <Dashboard />,
    icon: <DashboardIcon />
  }
  // { path: "/dashboard", name: "Dashboard", element: Dashboard, icon: DashboardIcon },
];

const Routes = () =>
  useRoutes([
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: dashboardRoutes
    },
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" replace /> },
        { path: "auth", element: <Auth /> },
        { path: "/payment", element: <Payment /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> }
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);

export default Routes;
