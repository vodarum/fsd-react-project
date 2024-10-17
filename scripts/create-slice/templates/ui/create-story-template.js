module.exports = (
    layer,
    componentName,
) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from '.';

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};`;
