import type { Meta, StoryObj } from '@storybook/react';
import { LeftSidebar } from '.';

const meta = {
    title: 'widgets/LeftSidebar/Sidebar',
    component: LeftSidebar,
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
} satisfies Meta<typeof LeftSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Open: Story = {
    args: {
        open: true,
    },
};
