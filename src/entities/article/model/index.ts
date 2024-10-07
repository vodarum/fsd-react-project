import {
    articleListSelectors as customArticleListSelectors,
    articleSelectors,
} from './selectors';
import {
    articleListActions,
    articleListReducer,
    articleListSelectors as entityAdapterArticleListSelectors,
    articleReducer,
} from './slices';

const articleListSelectors = {
    ...entityAdapterArticleListSelectors,
    ...customArticleListSelectors,
};

export * from './__mocks__';
export * from './const';
export * from './services';
export * from './types';
export {
    articleListActions,
    articleListReducer,
    articleListSelectors,
    articleReducer,
    articleSelectors,
};
