import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (Story: StoryFn) => {
    if (!document.documentElement.classList.contains('app')) {
        document.documentElement.classList.add('app');
    }

    return <Story />;
};
