import type { Meta, StoryObj } from '@storybook/react';
import Article from '.';

const meta = {
    title: 'pages/Article',
    component: Article,
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
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
