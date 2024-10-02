import * as selectors from './selectors';
import {
    articleCommentsActions,
    articleCommentsReducer,
    articleCommentsSelectors as entityAdapterSelectors,
} from './slice';

const articleCommentsSelectors = {
    ...entityAdapterSelectors,
    ...selectors,
};

export {
    articleCommentsActions,
    articleCommentsReducer,
    articleCommentsSelectors,
};
export * from './__mocks__';
export * from './services';
export * from './types';
