import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '.';
import { VStack } from '@/shared/ui/stack';
import { AppLink, AppLinkVariants } from '@/shared/ui/app-link';

const meta = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        activator: 'PopoverActivator',
        children: (
            <VStack gap={4}>
                {Array(5)
                    .fill(0)
                    .map((_, idx) => {
                        const key = idx + 1;
                        return (
                            <AppLink
                                key={key}
                                linkType='anchor'
                                to='#'
                                variant={AppLinkVariants.bordered}
                            >{`Link ${key}`}</AppLink>
                        );
                    })}
            </VStack>
        ),
    },
} satisfies Meta<typeof Popover>;

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
