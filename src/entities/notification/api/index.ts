import { $rtkApi } from '@/shared/api';
import type { Notification } from '../model/types';

const notificationsApi = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
                params: {
                    _expand: 'user',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetNotificationsQuery } = notificationsApi;
