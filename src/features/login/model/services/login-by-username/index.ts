import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Session, userActions } from 'entities/user';
import { LoginState } from '../../types';

type LoginData = Pick<LoginState, 'username' | 'password'>;

export const loginByUsername = createAsyncThunk<
    Session,
    LoginData,
    { rejectValue: string }
>('login/loginByUsername', async (loginData, thunkAPI) => {
    try {
        const response = await axios.post<Session>(
            'http://localhost:8000/login',
            loginData,
        );

        if (!response.data) throw new Error();

        thunkAPI.dispatch(userActions.setSession(response.data));

        return response.data;
    } catch (e) {
        console.error(e);
        return thunkAPI.rejectWithValue(`Error: ${e}`);
    }
});
