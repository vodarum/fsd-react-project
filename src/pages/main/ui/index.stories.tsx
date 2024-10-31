import type { Meta, StoryObj } from '@storybook/react';
import Main from '.';
import { PageDecorator } from '@/shared/config/storybook/page-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/Main',
    component: Main,
    tags: ['autodocs'],
    decorators: [PageDecorator, StoreDecorator({})],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
