import {get} from './httpClient.js';
export async function getSwapi(signal) {
    return await get('swapi', signal);
}