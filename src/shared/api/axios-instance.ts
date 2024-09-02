import axios from 'axios';
import { APP_SESSION_LS_KEY } from './const';

const getToken = (): string => {
    const session = localStorage.getItem(APP_SESSION_LS_KEY);
    return !session ? '' : JSON.parse(session)?.token || '';
};

export const $api = axios.create({
    baseURL: __BASE_URL__,
    headers: {
        authorization: getToken(),
    },
});
