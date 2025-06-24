// src/pages/routes.ts

import { type RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Users from "./users/Users";
import UserDetailsPage from "./userDetails/UserDetails";
import LoginRoute from "./auth/LoginRoute";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./notFound/NotFound";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LoginRoute />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UserDetailsPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];
