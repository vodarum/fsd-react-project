import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from 'app/providers/store-provider';
import { User } from 'entities/user';

export const fetchById = createAsyncThunk<User, number, ThunkAPI<string>>(
    'user/fetchById',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<User>(`/users/${id}`);
            if (!response.data) throw new Error();
            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue(`Error: ${e}`);
        }
    },
);
