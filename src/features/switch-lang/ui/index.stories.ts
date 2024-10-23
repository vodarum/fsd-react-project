import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from '.';

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
