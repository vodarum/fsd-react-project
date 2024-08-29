import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session, UserState } from '../types';

const initialState: UserState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetSession: (state: UserState) => {
            state.session = undefined;
        },
        setSession: (state: UserState, action: PayloadAction<Session>) => {
            state.session = action.payload;
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
