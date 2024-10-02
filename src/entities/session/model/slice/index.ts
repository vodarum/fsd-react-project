import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session, SessionState } from '../types';

const initialState: SessionState = {};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        resetData: (state: SessionState) => {
            state.data = undefined;
        },
        setData: (state: SessionState, action: PayloadAction<Session>) => {
            state.data = action.payload;
        },
    },
});

export const { actions: sessionActions, reducer: sessionReducer } =
    sessionSlice;
