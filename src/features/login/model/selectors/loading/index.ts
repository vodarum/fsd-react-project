import { createSelector } from '@reduxjs/toolkit';
import type { LoginState } from '../../types';
import { selectLoginState } from '../state';

export const selectLoading = createSelector(
    [selectLoginState],
    (state: LoginState) => state?.loading || false,
);
