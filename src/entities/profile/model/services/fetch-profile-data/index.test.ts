import { fetchProfileData } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { mockProfile } from '../../__mocks__';

const url = '/profile';

describe('fetchProfileData', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchProfileData);

        api.get.mockReturnValueOnce(
            Promise.resolve({ data: mockProfile }),
        );

        const result = await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfile);
    });

    test('with rejected', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');
        const { callThunk, dispatch, api } = testAsyncThunk(fetchProfileData);

        api.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk();

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(1);
        expect(api.get).toHaveBeenCalledWith(url);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });
});
