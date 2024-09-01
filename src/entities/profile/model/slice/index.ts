import { createSlice } from '@reduxjs/toolkit';
import { ProfileState } from '../types';

const initialState: ProfileState = {
    data: undefined,
    error: undefined,
    loading: false,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } =
    profileSlice;
