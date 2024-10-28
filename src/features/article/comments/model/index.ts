import * as selectors from './selectors';
import {
    articleCommentsReducer,
    articleCommentsSelectors as entityAdapterSelectors,
} from './slice';

const articleCommentsSelectors = {
    ...entityAdapterSelectors,
    ...selectors,
};

export { articleCommentsReducer, articleCommentsSelectors };
export * from './services';
export type * from './types';
