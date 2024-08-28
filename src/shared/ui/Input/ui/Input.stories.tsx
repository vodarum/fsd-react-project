import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputVariants } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        value: 'Text',
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outlined: Story = {
    args: {
        variant: InputVariants.outlined,
    },
};

export const Underlined: Story = {
    args: {
        variant: InputVariants.underlined,
    },
};
