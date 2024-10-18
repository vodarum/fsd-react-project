import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ScrollPositionObject, ScrollPositionState } from '../../types';

const initialState: ScrollPositionState = {
    data: {},
};

const scrollPositionSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers: {
        setData: (
            state: ScrollPositionState,
            action: PayloadAction<ScrollPositionObject>,
        ) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
    },
});

export const {
    actions: scrollPositionActions,
    reducer: scrollPositionReducer,
} = scrollPositionSlice;
