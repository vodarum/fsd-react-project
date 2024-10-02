import { loginByUsername } from '.';
import { sessionActions } from 'entities/session';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';

const url = '/login';
const credentialData = { username: 'admin', password: 'qwerty' };

describe('loginByUsername', () => {
    test('with fulfilled', async () => {
        const mockResponseData = { userId: 1, token: 'token' };
        const { callThunk, dispatch, api } = testAsyncThunk(loginByUsername);

        api.post.mockReturnValueOnce(
            Promise.resolve({ data: mockResponseData }),
        );

        const result = await callThunk(credentialData);

        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(api.post).toHaveBeenCalledWith(url, credentialData);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(dispatch).toHaveBeenCalledWith(
            sessionActions.setData(mockResponseData),
        );
        expect(result.payload).toEqual(mockResponseData);
    });

    test('with rejected', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');
        const { callThunk, dispatch, api } = testAsyncThunk(loginByUsername);

        api.post.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk(credentialData);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(1);
        expect(api.post).toHaveBeenCalledWith(url, credentialData);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });
});
