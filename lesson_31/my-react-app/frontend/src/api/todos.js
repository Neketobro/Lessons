import { get } from './httpClient.js';

export async function getTodos(signal) {
    return await get('', signal);
}
