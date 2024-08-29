import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginState } from '../types';
import { loginByUsername } from '../services/login-by-username';

const initialState: LoginState = {
    username: '',
    password: '',
    loading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: LoginState, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginState, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
