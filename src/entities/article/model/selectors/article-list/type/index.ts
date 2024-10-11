import { State } from 'app/providers/store-provider';
import { ArticleTypes } from '../../../const';

export const selectType = (state: State) =>
    state?.articleList?.type ?? ArticleTypes.all;
