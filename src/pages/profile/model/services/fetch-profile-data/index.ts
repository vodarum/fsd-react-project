import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types';
import { ThunkAPI } from 'app/providers/store-provider';

export const fetchProfileData = createAsyncThunk<
    Profile,
    number,
    ThunkAPI<string>
>('profile/fetchProfileData', async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Profile>(`/profile/${id}`);
        if (!response.data) throw new Error();
        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue(`Error: ${e}`);
    }
});
