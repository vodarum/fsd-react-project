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
    // eslint-disable-next-line indent
    options: CreateSliceOptions<
        State,
        CaseReducers,
        Name,
        ReducerPath,
        Selectors
    >,
    // eslint-disable-next-line indent
): BuildSliceResult<State, CaseReducers, Name, ReducerPath, Selectors> => {
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
