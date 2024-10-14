import * as selectors from './selectors';
import {
    articleRecommendationsReducer,
    articleRecommendationsSelectors as entityAdapterSelectors,
} from './slices';

const articleRecommendationsSelectors = {
    ...entityAdapterSelectors,
    ...selectors,
};

export { articleRecommendationsReducer, articleRecommendationsSelectors };
export * from './__mocks__';
export * from './services';
export * from './types';
