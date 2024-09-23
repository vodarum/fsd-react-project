import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SettingsButton } from '.';

const meta = {
    title: 'shared/SettingsButton',
    component: SettingsButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof SettingsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
