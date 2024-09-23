import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import { MenuButton } from 'shared/ui/menu-button';
import { SettingsButton } from 'shared/ui/settings-button';
import { mockSession } from 'entities/user';

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

export const WithPassedPropsButtons: Story = {
    decorators: [StoreDecorator({})],
    args: {
        append: <SettingsButton />,
        prepend: <MenuButton />,
    },
};

export const ForLoggedUser: Story = {
    decorators: [
        StoreDecorator({
            preloadedState: {
                user: {
                    session: mockSession,
                },
            },
        }),
    ],
    args: {
        append: <SettingsButton />,
        prepend: <MenuButton />,
    },
};
