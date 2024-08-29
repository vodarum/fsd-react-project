import { createSelector } from '@reduxjs/toolkit';
import type { UserState } from '../../types';
import { selectUserState } from '../state';

export const selectSession = createSelector(
    [selectUserState],
    (state: UserState) => state?.session,
);
