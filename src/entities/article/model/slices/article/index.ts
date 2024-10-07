import { createSlice } from '@reduxjs/toolkit';
import { ArticleState } from '../../types';
import { fetchById } from '../../services';

const initialState: ArticleState = {
    loading: false,
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchById.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchById.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { reducer: articleReducer } = articleSlice;
