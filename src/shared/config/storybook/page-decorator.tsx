import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const PageDecorator = (Story: StoryFn) => (
    <div className='layout' style={{ height: '100vh' }}>
        <main className='layout-main'>
            <Story />
        </main>
    </div>
);
