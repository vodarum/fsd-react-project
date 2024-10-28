import { mockUsers } from '@/entities/user/testing';

export const mockComments = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        articleId: 1,
        userId: 1,
        user: mockUsers[0],
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        articleId: 1,
        userId: 2,
        user: mockUsers[1],
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        articleId: 1,
        userId: 1,
        user: mockUsers[2],
    },
];
