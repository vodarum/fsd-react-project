import type { Meta, StoryObj } from '@storybook/react';
import Admin from '.';
import { PageDecorator } from '@/shared/config/storybook/page-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/Admin',
    component: Admin,
    tags: ['autodocs'],
    decorators: [PageDecorator, StoreDecorator({})],
} satisfies Meta<typeof Admin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
