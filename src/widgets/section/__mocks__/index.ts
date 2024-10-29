import type { State } from '@/app/providers/store-provider';
import type { ScrollPositionObject, ScrollPositionState } from '../model/types';

const mockScrollPositionData: ScrollPositionObject = {
    key1: 200,
    key2: 500,
};

const mockScrollPositionState: ScrollPositionState = {
    data: {},
};

const mockInitialAppState: State = {
    scrollPosition: mockScrollPositionState,
} as State;

export { mockScrollPositionData, mockScrollPositionState, mockInitialAppState };
