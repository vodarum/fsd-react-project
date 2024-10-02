import { createSelector } from '@reduxjs/toolkit';
import type { Session } from '../../types';
import { selectSessionData } from '../data';

export const selectIsAuth = createSelector(
    [selectSessionData],
    (state?: Session) => !!state?.token || false,
);
