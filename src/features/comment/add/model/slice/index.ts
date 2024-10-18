import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AddCommentState } from '../types';

const initialState: AddCommentState = {
    text: '',
};

const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setText: (state: AddCommentState, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentActions, reducer: addCommentReducer } =
    addCommentSlice;
