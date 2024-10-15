import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '.';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    args: {
        children: Array(5)
            .fill(0)
            .map((_, i) => {
                const idx = i + 1;
                return (
                    // eslint-disable-next-line i18next/no-literal-string
                    <div key={idx} style={{ border: '1px solid' }}>
                        Item {idx}
                    </div>
                );
            }),
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        direction: 'row',
    },
};

export const RowJustifyCenter: Story = {
    args: {
        direction: 'row',
        justify: 'center',
    },
};

export const RowJustifyBetween: Story = {
    args: {
        direction: 'row',
        justify: 'between',
    },
};

export const RowGap4: Story = {
    args: {
        direction: 'row',
        gap: 4,
    },
};

export const RowGap8: Story = {
    args: {
        direction: 'row',
        gap: 8,
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
    },
};

export const ColumnAlignCenter: Story = {
    args: {
        direction: 'column',
        align: 'center',
    },
};

export const ColumnAlignStretch: Story = {
    args: {
        direction: 'column',
        align: 'stretch',
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: 4,
    },
};

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: 8,
    },
};
