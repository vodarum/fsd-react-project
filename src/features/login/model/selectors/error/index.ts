import { createSelector } from '@reduxjs/toolkit';
import type { LoginState } from '../../types';
import { selectLoginState } from '../state';

export const selectError = createSelector(
    [selectLoginState],
    (state: LoginState) => state?.error,
);
