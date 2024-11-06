import { createSelector } from '@reduxjs/toolkit';
import { selectUserData } from '../data';
import { UserRole } from '@/shared/api';

const selectUserRoles = createSelector(
    [selectUserData],
    (userData) => userData?.roles ?? [],
);

const selectHasRole = createSelector(
    [selectUserRoles],
    (userRoles) => (role: UserRole) => userRoles.includes(role),
);

export { selectUserRoles, selectHasRole };
