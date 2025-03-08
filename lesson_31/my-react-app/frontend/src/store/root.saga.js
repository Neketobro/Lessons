import { all } from "redux-saga/effects";
import { watchFetchTodosSagas, watchAddTodoSagas, watchDeleteTodoSagas, watchChengeTodoSagas, watchCheckTodoSagas } from "./todos/todos.sagas";

export function* rootSaga() {
    yield all([
        watchFetchTodosSagas(),
        watchAddTodoSagas(),
        watchDeleteTodoSagas(),
        watchChengeTodoSagas(),
        watchCheckTodoSagas()
    ]);
}