import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile, ValidateProfileError } from '../../types';
import { ThunkAPI } from 'app/providers/store-provider';
import { selectProfileForm } from '../../selectors';
import { validateProfileData } from '../validate-profile-data';
import { ValidateProfileErrors } from '../../const';

export const updateProfileData = createAsyncThunk<
    Profile,
    number,
    ThunkAPI<ValidateProfileError[]>
>('profile/updateProfileData', async (id, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    try {
        const formData = selectProfileForm(getState());
        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        const response = await extra.api.put<Profile>(`/profile/${id}`, formData);
        if (!response.data) throw new Error();
        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue([ValidateProfileErrors.serverError]);
    }
});
