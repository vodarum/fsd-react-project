import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types';
import { ThunkAPI } from 'app/providers/store-provider';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkAPI<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const response = await extra.api.get<Profile>('/profile');
        if (!response.data) throw new Error();
        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue(`Error: ${e}`);
    }
});
