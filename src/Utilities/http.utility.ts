const baseUrl = process.env.REACT_APP_BASE_URL;

const HTTP_STATUS_CODES = {
    ERROR: [400, 401, 403, 404],
    SUCCESS: [200, 201]
}

export interface HttpResponse {
    isSuccess: boolean,
    data: {[key: string]: unknown}
}

export const get = (endpoint: string) => {
    return fetch(`${baseUrl}/${endpoint}`).then(async (response) => {
        const jsonResponse = await response.json();
        return {
            data: jsonResponse,
            isSuccess: HTTP_STATUS_CODES.SUCCESS.includes(response.status)
        }
    });
};

export const getWithBaseUrl = (url: string) => {
    return fetch(url).then(async (response) => {
        const jsonResponse = await response.json();
        return {
            data: jsonResponse,
            isSuccess: HTTP_STATUS_CODES.SUCCESS.includes(response.status)
        }
    });
};


export const httpUtilities = {
    get,
    getWithBaseUrl
}