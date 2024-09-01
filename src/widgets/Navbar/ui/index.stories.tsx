import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    args: {
        className: 'layout-navbar',
    },
    decorators: [
        (Story) => (
            <div className='layout' style={{ height: '100vh' }}>
                <Story />
                <div
                    className='layout-main'
                    style={{ backgroundColor: 'teal' }}
                />
            </div>
        ),
        StoreDecorator({}),
    ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [StoreDecorator({})],
};

export const ForLoggedUser: Story = {
    decorators: [
        StoreDecorator({
            preloadedState: {
                user: {
                    session: {
                        userId: 1,
                        token: 'qwerty123',
                    },
                },
            },
        }),
    ],
};
