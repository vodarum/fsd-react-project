import type { Meta, StoryObj } from '@storybook/react';
import Articles from '.';
import { StoreDecorator } from 'shared/config/storybook/store-decorator';
import {
    articleListReducer,
    mockArticleListEntityState,
    mockArticleListState,
} from 'entities/article';

const meta = {
    title: 'pages/Articles',
    component: Articles,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className='layout' style={{ height: '100vh' }}>
                <main className='layout-main'>
                    <Story />
                </main>
            </div>
        ),
        StoreDecorator({
            preloadedReducer: {
                articleList: articleListReducer,
            },
            preloadedState: {
                articleList: {
                    ...mockArticleListState,
                    entities: mockArticleListEntityState.entities,
                    ids: mockArticleListEntityState.ids,
                },
            },
        }),
    ],
} satisfies Meta<typeof Articles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
