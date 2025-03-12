import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, CounterPage, TodosPage } from "../pages";

const routerConfig = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <CounterPage /> },
      {
        path: "todos",
        children: [
          { index: true, element: <TodosPage /> }
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);