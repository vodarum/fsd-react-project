import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

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
            user: {
                session: {
                    userId: 1,
                    token: 'qwerty123',
                },
            },
        }),
    ],
};
