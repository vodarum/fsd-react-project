import { State } from 'app/providers/store-provider';
import { ArticleViewTypes } from '../../../const';

export const selectView = (state: State) =>
    state?.articleList?.view || ArticleViewTypes.grid;
