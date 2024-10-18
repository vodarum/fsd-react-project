import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'entities/user';
import type { UserState } from '../types';
import { fetchById, update } from '../services';

const initialState: UserState = {
    data: undefined,
    error: undefined,
    loading: false,
    editable: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        cancelEditing: (state: UserState) => {
            userSlice.caseReducers.setEditable(state, {
                type: 'setEditable',
                payload: false,
            });
            state.validateErrors = undefined;
            state.form = state.data;
        },
        setForm: (state: UserState, action: PayloadAction<Partial<User>>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        setEditable: (state: UserState, action: PayloadAction<boolean>) => {
            state.editable = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchById.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchById.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.loading = false;
            })
            .addCase(fetchById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(update.pending, (state) => {
                state.validateErrors = undefined;
                state.loading = true;
            })
            .addCase(update.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.editable = false;
                state.loading = false;
            })
            .addCase(update.rejected, (state, action) => {
                state.validateErrors = action.payload;
                state.loading = false;
            });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
