import type { Meta, StoryObj } from '@storybook/react';
import Main from '.';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/Main',
    component: Main,
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
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
