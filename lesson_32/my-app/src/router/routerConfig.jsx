import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, CurriculumVitaePage, TodoListPage } from "../pages";

const routerConfig = [
    {
        path: '/',
        errorElement: <ErrorPage />,
        id: 'root',
        children: [
            { index: true, element: <CurriculumVitaePage /> },
            {
                path: "todolist",
                children: [
                    { index: true, element: <TodoListPage /> }
                ],
            },
            {
                path: "swapi",
                children: [
                    {
                        index: true,
                        loader: async ({ request }) => {
                            const resp = await fetch(
                                `https://reqres.in/api/users`,
                                { signal: request.signal }
                            );
                            const { data } = await resp.json();
                            return data;
                        },
                        async lazy() {
                            const { SwapiPage } = await import('../pages/SwapiPage/index')

                            return { Component: SwapiPage }
                        }
                    }
                ],
            },
        ]

    }
]

export const router = createBrowserRouter(routerConfig);