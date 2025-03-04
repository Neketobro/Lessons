import { get } from './httpClient.js';

export async function getTodos(payload, signal) {
    return await get(payload, signal);
}