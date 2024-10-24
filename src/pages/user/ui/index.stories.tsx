import type { Meta, StoryObj } from '@storybook/react';
import User from '.';
import { mockUsers } from '@/entities/user';
import { mockUserState, userReducer } from '@/features/user';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/User',
    component: User,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({}),
        (Story) => (
            <div className='layout' style={{ height: '100vh' }}>
                <main className='layout-main'>
                    <Story />
                </main>
            </div>
        ),
    ],
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [
        StoreDecorator({
            preloadedReducer: {
                user: userReducer,
            },
            preloadedState: {
                user: {
                    ...mockUserState,
                    data: mockUsers[0],
                },
            },
        }),
    ],
};

export const NotFound: Story = {};
