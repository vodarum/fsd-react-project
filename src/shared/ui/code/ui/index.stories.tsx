import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '.';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        content: `<!DOCTYPE html>
<html lang="ru">
   <head>
      <meta charset="UTF-8">
      <title>HTML Document</title>
   </head>
   <body>
      <p>
         <b>
            Этот текст будет полужирным, <i>а этот — ещё и курсивным</i>.
         </b>
      </p>
   </body>
</html>`,
    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
