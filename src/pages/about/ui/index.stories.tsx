import type { Meta, StoryObj } from '@storybook/react';
import About from '.';
import { PageDecorator } from '@/shared/config/storybook/page-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/About',
    component: About,
    tags: ['autodocs'],
    decorators: [PageDecorator, StoreDecorator({})],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
