import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AlignCenter: Story = {
    args: {
        align: 'center',
    },
};

export const AlignJustify: Story = {
    args: {
        align: 'justify',
    },
};

export const AlignLeft: Story = {
    args: {
        align: 'left',
    },
};

export const AlignRight: Story = {
    args: {
        align: 'right',
    },
};
