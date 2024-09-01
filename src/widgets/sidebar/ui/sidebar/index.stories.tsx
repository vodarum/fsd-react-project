import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '.';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    args: {
        className: 'layout-sidebar',
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
    ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Collapsed: Story = {
    args: {
        collapsed: true,
    },
};
