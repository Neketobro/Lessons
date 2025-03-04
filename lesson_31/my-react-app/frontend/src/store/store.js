import { configureStore } from '@reduxjs/toolkit';
import todosSagaReducer from './todos/todos.slice.js';
import createSagaMiddleware from "redux-saga";
import { rootSaga } from './root.saga.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todos: todosSagaReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({thunk: false, seriazableCheck: false}),
        sagaMiddleware,
    ]
})
sagaMiddleware.run(rootSaga);