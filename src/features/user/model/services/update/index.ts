import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPI } from '@/app/providers/store-provider';
import { User } from '@/entities/user';
import { validate } from '../validate';
import { ValidateUserErrors } from '../../const';
import { selectUserForm } from '../../selectors';
import type { ValidateUserError } from '../../types';

export const update = createAsyncThunk<
    User,
    void,
    ThunkAPI<ValidateUserError[]>
>('user/update', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    try {
        const formData = selectUserForm(getState());
        const errors = validate(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        const response = await extra.api.put<User>(
            `/users/${formData?.id}`,
            formData,
        );
        if (!response.data) throw new Error();
        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue([ValidateUserErrors.serverError]);
    }
});
