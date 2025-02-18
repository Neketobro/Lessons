import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage } from "../pages";

const routerConfig = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    id: "root",
    loader: async ({ request }) => {
      const resp = await fetch(
          `https://reqres.in/api/users`,
          { signal: request.signal }
      );
      const { data } = await resp.json();
      return data
    },
    children: [
      { index: true, element: <MainPage /> },
      { path: 'example', element: <h1>This is example page. Path = /example</h1> },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);