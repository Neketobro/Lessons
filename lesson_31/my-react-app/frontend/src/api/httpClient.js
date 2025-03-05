import axios from "axios";

const baseURL = import.meta.env.VITE_SWAPI_BASE_URL;
const axiosConf = (signal = {}) =>
    axios.create({
        baseURL,
        signal,
        headers: {
            "Content-type": "application/json",
        },
    });

const genericRequest = async ({ requestType = "get", url, data, signal }) => {
    try {
        const httpClient = axiosConf(signal);
        const response = await httpClient[requestType](url, data);

        return response;
    } catch (e) {
        if (axios.isAxiosError(e) && e.response) {
            console.error(e.response);
        } else {
            throw new Error("Unknown error.");
        }
    }
};

export const get = (url, signal) => {
    const result = genericRequest({ requestType: "get", url, signal });
    return result;
};