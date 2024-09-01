import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { State } from 'app/providers/store-provider';

type ActionCreatorType<R, A, C> = (arg: A) => AsyncThunkAction<R, A, C>;

export const testAsyncThunk = <Returned, ThunkArg, ThunkApiConfig>(
    actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>,
) => {
    const dispatch: Dispatch = jest.fn();
    const getState: () => State = jest.fn();

    return {
        callThunk: async (arg: ThunkArg) => {
            const action = actionCreator(arg);
            // eslint-disable-next-line
            // @ts-ignore
            return await action(dispatch, getState, undefined);
        },
        dispatch,
    };
};
