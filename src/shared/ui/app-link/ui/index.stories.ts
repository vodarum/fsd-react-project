import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkVariants } from '.';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'AppLink',
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bordered: Story = {
    args: {
        variant: AppLinkVariants.bordered,
    },
};
