import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileState } from '../types';
import { fetchProfileData } from '../services/fetch-profile-data';
import { updateProfileData } from '../services/update-profile-data';

const initialState: ProfileState = {
    data: undefined,
    error: undefined,
    loading: false,
    editable: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        cancelEditing: (state: ProfileState) => {
            profileSlice.caseReducers.setEditable(state, {
                type: 'setEditable',
                payload: false,
            });
            state.form = state.data;
        },
        setForm: (
            state: ProfileState,
            action: PayloadAction<Partial<Profile>>,
        ) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        setEditable: (state: ProfileState, action: PayloadAction<boolean>) => {
            state.editable = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.loading = false;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.form = action.payload;
                state.editable = false;
                state.loading = false;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } =
    profileSlice;
