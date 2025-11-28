async function request(method, url, options = {}) {
    const { params, body } = options;
    const query = params
        ? '?' +
            new URLSearchParams(Object.fromEntries(Object.entries(params).map(([k, v]) => [k, String(v)]))).toString()
        : '';
    const config = { method };
    if (body) {
        config.headers = { 'Content-Type': 'application/json' };
        config.body = JSON.stringify(body);
    }
    const res = await fetch(url + query, config);
    if (!res.ok)
        throw new Error('HTTP ' + res.status);
    return (await res.json());
}
export const http = {
    get: (url, params) => request('GET', url, { params })
};
