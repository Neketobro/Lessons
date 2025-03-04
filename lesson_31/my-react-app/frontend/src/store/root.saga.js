import { all } from "redux-saga/effects";
import { watchfetchTodosSagas } from "./todos/todos.sagas";

export function* rootSaga() {
    yield all([watchfetchTodosSagas()]);
}