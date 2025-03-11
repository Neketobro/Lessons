import { get, post, del, patch } from './httpClient.js';

export async function getTodos(signal) {
    return await get('', signal);
}
export async function addTodo(payload) {
    return await post('', payload);
}
export async function deleteTodo(id) {
    return await del(`${id}`);
}
export async function chengeTodo(payload) {
    return await patch(`${payload.id}`, payload);
}