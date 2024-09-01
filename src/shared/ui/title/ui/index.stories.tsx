import type { Meta, StoryObj } from '@storybook/react';
import { Title, TitleLevels } from '.';

const meta = {
    title: 'shared/Title',
    component: Title,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Title',
    },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Level1: Story = {
    args: {
        level: TitleLevels.H1,
    },
};

export const Level2: Story = {
    args: {
        level: TitleLevels.H2,
    },
};

export const Level3: Story = {
    args: {
        level: TitleLevels.H3,
    },
};

export const Level4: Story = {
    args: {
        level: TitleLevels.H4,
    },
};

export const Level5: Story = {
    args: {
        level: TitleLevels.H5,
    },
};

export const Level6: Story = {
    args: {
        level: TitleLevels.H6,
    },
};
