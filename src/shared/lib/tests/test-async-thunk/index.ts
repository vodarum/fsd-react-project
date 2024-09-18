import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { State } from 'app/providers/store-provider';

type ActionCreatorType<R, A, Rj> = (
    arg: A,
) => AsyncThunkAction<R, A, { rejectValue: Rj }>;

jest.mock('axios');
const axiosMocked = jest.mocked(axios);

export const testAsyncThunk = <Returned, ThunkArg, ThunkApiConfig>(
    actionCreator: ActionCreatorType<Returned, ThunkArg, ThunkApiConfig>,
    state?: DeepPartial<State>,
) => {
    const dispatch: Dispatch = jest.fn();
    const getState: () => State = jest.fn(() => state as State);
    const api: jest.MockedFunctionDeep<AxiosStatic> = axiosMocked;

    return {
        callThunk: async (arg: ThunkArg) => {
            const action = actionCreator(arg);
            // @ts-ignore
            return await action(dispatch, getState, { api });
        },
        dispatch,
        api,
    };
};
