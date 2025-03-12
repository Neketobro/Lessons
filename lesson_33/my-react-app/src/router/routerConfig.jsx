import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, AboutMePage } from "../pages";

const routerConfig = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "contact",
        children: [
          {
            index: true,
            loader: async ({ request }) => {
              const resp = await fetch(
                `https://reqres.in/api/users`,
                { signal: request.signal }
              );
              const { data } = await resp.json();
              return data
            },
            async lazy() {
              const { ContactsPage } = await import('../pages/Contacts/index')

              return { Component: ContactsPage }
            }
          }
        ],
      },
      {
        path: "about-me",
        children: [
          { index: true, element: <AboutMePage /> }
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);