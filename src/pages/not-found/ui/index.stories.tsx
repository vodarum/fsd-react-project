import type { Meta, StoryObj } from '@storybook/react';
import NotFound from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/NotFound',
    component: NotFound,
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
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
