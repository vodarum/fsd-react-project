import type { State } from 'app/providers/store-provider';

export const selectAddCommentState = (state: State) => state?.addComment;
