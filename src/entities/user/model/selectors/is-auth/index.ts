import { createSelector } from '@reduxjs/toolkit';
import type { Session } from '../../types';
import { selectSession } from '../session';

export const selectIsAuth = createSelector(
    [selectSession],
    (state?: Session) => !!state?.token || false,
);
