import { State } from 'app/providers/store-provider';
import { SortOrders } from 'shared/api';

export const selectSortOrder = (state: State) =>
    state?.articleList?.sortOrder || SortOrders.asc;
