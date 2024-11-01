import { User } from '@/entities/user';
import { $rtkApi } from '@/shared/api';

const userPageApi = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<User, number>({
            query: (userId) => ({
                url: `/users/${userId}`,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetUserQuery } = userPageApi;
