import type { Meta, StoryObj } from '@storybook/react';
import NotFound from '.';
import { PageDecorator } from '@/shared/config/storybook/page-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/NotFound',
    component: NotFound,
    tags: ['autodocs'],
    decorators: [PageDecorator, StoreDecorator({})],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
