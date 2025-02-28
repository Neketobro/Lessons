import axios from 'axios';

const baseURL = import.meta.env.SWAPI_BASE_URL;
const axiosConfig = () => {
    axios.create({
        baseURL,
        signal,
        headers: {
            "Content-Type": "application/json"
        },
    })
}
const generiqRequest = async ({requestType, url, data, signal}) => {
    try {
        const httpClient = axiosConfig(signal);
        const response = await httpClient[requestType](url, data);

        return response
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            console.error(e.response);
        } else {
            throw new Error('Unknow error');
        }
    }
}

export const get = (url, signal) => {
    return generiqRequest({requestType: 'get', url, signal})
}