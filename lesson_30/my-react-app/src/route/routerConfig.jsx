import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage } from "../pages";

const routerConfig = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <MainPage /> },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);