import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarShapes } from '.';
import Image from './image.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        src: Image,
        alt: 'Leo',
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSize: Story = {
    args: {
        size: 250,
    },
};

export const Square: Story = {
    args: {
        size: 250,
        shape: AvatarShapes.square,
    },
};
