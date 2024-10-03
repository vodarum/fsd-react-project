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
export * from './__mocks__';
export * from './services';
export * from './types';
