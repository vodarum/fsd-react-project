import { createAsyncThunk } from '@reduxjs/toolkit';
import { Session, sessionActions } from 'entities/session';
import { LoginState } from '../../types';
import { ThunkAPI } from 'app/providers/store-provider';

type LoginData = Pick<LoginState, 'username' | 'password'>;

export const loginByUsername = createAsyncThunk<
    Session,
    LoginData,
    ThunkAPI<string>
>('login/loginByUsername', async (loginData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.post<Session>('/login', loginData);

        if (!response.data) throw new Error();

        dispatch(sessionActions.setData(response.data));

        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue(`Error: ${e}`);
    }
});
