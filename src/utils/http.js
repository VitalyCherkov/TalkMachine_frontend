'use strict';

const getHeaders = () => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    const token = window.localStorage.getItem('Token');
    console.log('token', token);
    if (token) {
        headers['authorization'] = `Token ${ token }`;
        window.localStorage.setItem('Token', token);
    }

    return headers;
};

const doRequest = ({ method, url, data = {} }) => {
    console.log(url);

    const params = {
        method, headers: getHeaders()
    };
    if (method === 'POST') {
        params.body = JSON.stringify(data);
    }

    return fetch(url, params).then((response) => {
        const contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
            if(response.status >= 400) {
                return Promise.reject(response.json());
            }
            return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
    });
    //     .then((json) => {
    //     return json;
    // }).catch((error) => {
    //     console.log(error);
    //     return error;
    // });
};

export const doPost = ({ url, data }) => {
    return doRequest({
        method: 'POST',
        url,
        data
    });
};

export const doGet = ({ url }) => {
    return doRequest({
        method: 'GET',
        url
    });
};
