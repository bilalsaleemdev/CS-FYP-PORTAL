
import axios from "axios";
import { Config } from "../../../Config";

const TIMEOUT = 15000;

const API = axios.create({
    baseURL: _baseUrl(),
    responseType: 'json',
});

API.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.message === 'timeout of 15000ms exceeded') {
        let customerID = localStorage.getItem('organitationID');
        if (customerID) {
            const id = JSON.parse(customerID);
            return Promise.reject({ ...error, data: { success: false, masssage: 'timeout exceeded' } });
        }
    }
    else if (401 === error.response.status && error.config.url?.indexOf("admin/login") == -1) {
        let customerID = localStorage.getItem('organitationID');
        if (customerID) {
            const orgId = JSON.parse(customerID);
            location.href = `/${orgId}`
        }
        else{
            location.href='/'
        }
        localStorage.clear();
    }
    else {
        return Promise.reject(error);
    }
});

function _baseUrl() {
    return Config.API_URL;
}

export async function processRequest(request, token){    
    switch (request.type) {
        case 'GET':
            const getResponse = await API.get(request.urlString, { cancelToken: token, timeout: TIMEOUT, params: request.params });
            return getResponse;
        case 'POST':
            const postResponse = await API.post(request.urlString, request.params, { cancelToken: token, timeout: TIMEOUT });
            return postResponse;
        case 'PUT':
            const putResponse = await API.put(request.urlString, request.params, { cancelToken: token, timeout: TIMEOUT });
            return putResponse;
        case 'DELETE':
            const deleteResponse = await API.delete(request.urlString, { cancelToken: token, timeout: TIMEOUT });
            return deleteResponse;
    }
}
/*
export async function firstApiCall<T = any, R = T>(): Promise<AxiosResponse<R>> {

    const getResponse = await API.get<R>('ping-server', { timeout: 250 });
    return getResponse;
}
*/
