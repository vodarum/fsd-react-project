import type { State } from 'app/providers/store-provider';
import type { AddCommentState } from '../types';

const mockAddCommentState: AddCommentState = {};

const mockInitialAppState: State = {} as State;

const mockAppState: State = {
    addComment: mockAddCommentState,
} as State;

export { mockAddCommentState, mockInitialAppState, mockAppState };
