import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from '.';
import Image from '../../avatar/ui/image.jpg';
import { Skeleton } from '../../skeleton';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: Image,
    },
};

export const ErrorFallback: Story = {
    args: {
        src: 'test',
        errorFallback: <Skeleton width={100} height={100} />,
    },
};
