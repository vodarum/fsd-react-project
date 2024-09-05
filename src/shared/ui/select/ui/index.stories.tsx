import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectVariants } from '.';
import { mockOptions } from '../__mocks__';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        label: 'Label',
        value: mockOptions[1].value,
        options: mockOptions,
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outlined: Story = {
    args: {
        variant: SelectVariants.outlined,
    },
};

export const Underlined: Story = {
    args: {
        variant: SelectVariants.underlined,
    },
};
