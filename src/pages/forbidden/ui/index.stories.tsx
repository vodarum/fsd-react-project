import type { Meta, StoryObj } from '@storybook/react';
import Forbidden from '.';
import { PageDecorator } from '@/shared/config/storybook/page-decorator';
import { StoreDecorator } from '@/shared/config/storybook/store-decorator';

const meta = {
    title: 'pages/Forbidden',
    component: Forbidden,
    tags: ['autodocs'],
    decorators: [PageDecorator, StoreDecorator({})],
} satisfies Meta<typeof Forbidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
