import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types';
import { ThunkAPI } from 'app/providers/store-provider';
import { selectProfileForm } from '../../selectors';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkAPI<string>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    try {
        const formData = selectProfileForm(getState());
        const response = await extra.api.put<Profile>('/profile', formData);
        if (!response.data) throw new Error();
        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue(`Error: ${e}`);
    }
});
