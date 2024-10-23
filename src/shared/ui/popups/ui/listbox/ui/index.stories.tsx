import type { Meta, StoryObj } from '@storybook/react';
import { Listbox, type ListboxOption } from '.';
import { fn } from '@storybook/test';

const options: ListboxOption<string>[] = [
    {
        value: '1',
        text: 'ListboxItem 1',
    },
    {
        value: '2',
        text: 'ListboxItem 2',
    },
    {
        value: '3',
        text: 'ListboxItem 3',
    },
];

const meta = {
    title: 'shared/Listbox',
    component: Listbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        value: options[1].value,
        options,
        onChange: fn(),
    },
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BottomStart: Story = {
    args: {
        anchor: 'bottom start',
    },
};
export const BottomEnd: Story = {
    args: {
        anchor: 'bottom end',
    },
};

export const TopStart: Story = {
    args: {
        anchor: 'top start',
    },
};

export const TopEnd: Story = {
    args: {
        anchor: 'top end',
    },
};
