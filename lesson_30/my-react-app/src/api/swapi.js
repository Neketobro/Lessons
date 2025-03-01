import { get } from './httpClient.js';

export async function getSwapi(payload, signal) {
    return await get(payload, signal);
}