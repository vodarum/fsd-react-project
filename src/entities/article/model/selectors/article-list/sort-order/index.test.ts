import { mockInitialAppState, mockArticleListState } from '../../../__mocks__';
import { selectSortOrder } from '.';
import { SortOrders } from 'shared/api';

describe('selectSortOrder', () => {
    test(`returns ${SortOrders.asc} for initial state`, () => {
        expect(selectSortOrder(mockInitialAppState)).toBe(SortOrders.asc);
    });

    test(`returns ${SortOrders.asc} for initial articleList state`, () => {
        expect(
            selectSortOrder({
                ...mockInitialAppState,
                articleList: mockArticleListState,
            }),
        ).toBe(SortOrders.asc);
    });

    test(`returns ${SortOrders.desc}`, () => {
        expect(
            selectSortOrder({
                ...mockInitialAppState,
                articleList: {
                    ...mockArticleListState,
                    sortOrder: SortOrders.desc,
                },
            }),
        ).toBe(SortOrders.desc);
    });
});
