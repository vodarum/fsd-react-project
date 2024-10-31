import {
    bindActionCreators,
    CaseReducerActions,
    createSlice,
    CreateSliceOptions,
    Slice,
    SliceCaseReducers,
    SliceSelectors,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useAppDispatch } from '../lib/hooks';

type BuildSliceResult<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string,
    ReducerPath extends string,
    Selectors extends SliceSelectors<State>,
> = Slice<State, CaseReducers, Name, ReducerPath, Selectors> & {
    useActions: () => CaseReducerActions<CaseReducers, Name>;
};

export const buildSlice = <
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string,
    Selectors extends SliceSelectors<State>,
    ReducerPath extends string = Name,
>(
    options: CreateSliceOptions< // eslint-disable-line indent
        State,
        CaseReducers,
        Name,
        ReducerPath,
        Selectors
    >,
): BuildSliceResult<State, CaseReducers, Name, ReducerPath, Selectors> => { // eslint-disable-line indent
    const slice = createSlice(options);
    const useActions = () => {
        const dispatch = useAppDispatch();

        return useMemo(
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
};
