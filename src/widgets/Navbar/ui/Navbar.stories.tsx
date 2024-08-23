import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

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
    ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
