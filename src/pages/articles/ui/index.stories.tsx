import type { Meta, StoryObj } from '@storybook/react';
import Articles from '.';

const meta = {
    title: 'pages/Articles',
    component: Articles,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className='layout' style={{ height: '100vh' }}>
                <main className='layout-main'>
                    <Story />
                </main>
            </div>
        ),
    ],
} satisfies Meta<typeof Articles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
