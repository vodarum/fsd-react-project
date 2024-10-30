import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APP_SESSION_LS_KEY } from './consts';

export const $rtkApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: __BASE_URL__,
        prepareHeaders(headers) {
            const session = localStorage.getItem(APP_SESSION_LS_KEY);
            const token = !session ? '' : JSON.parse(session)?.token || '';

            if (token) {
                headers.set('authorization', token);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
});
