import { all } from "redux-saga/effects";
import { watchFetchTodosSagas, watchAddTodoSagas, watchDeleteTodoSagas } from "./todos/todos.sagas";

export function* rootSaga() {
    yield all([watchFetchTodosSagas(), watchAddTodoSagas(), watchDeleteTodoSagas()]);
}