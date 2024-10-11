import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '.';
import { mockTabItems } from '../__mocks__';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        activeKey: mockTabItems[0].key,
        items: mockTabItems,
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
