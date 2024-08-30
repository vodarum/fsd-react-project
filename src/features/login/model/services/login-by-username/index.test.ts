import axios from 'axios';
import { loginByUsername } from '.';
import { userActions } from 'entities/user';
import { testAsyncThunk } from 'shared/lib/tests/testAsyncThunk';

jest.mock('axios');
const axiosMocked = jest.mocked(axios);

const url = 'http://localhost:8000/login';
const credentialData = { username: 'admin', password: 'qwerty' };

describe('loginByUsername', () => {
    test('with fulfilled', async () => {
        const mockResponseData = { userId: 1, token: 'token' };

        axiosMocked.post.mockReturnValueOnce(
            Promise.resolve({ data: mockResponseData }),
        );

        const testThunk = testAsyncThunk(loginByUsername);
        const result = await testThunk.callThunk(credentialData);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(axiosMocked.post).toHaveBeenCalledWith(url, credentialData);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(testThunk.dispatch).toHaveBeenCalledWith(
            userActions.setSession(mockResponseData),
        );
        expect(result.payload).toEqual(mockResponseData);
    });

    test('with rejected', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');

        axiosMocked.post.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const testThunk = testAsyncThunk(loginByUsername);
        const result = await testThunk.callThunk(credentialData);

        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(1);
        expect(axiosMocked.post).toHaveBeenCalledWith(url, credentialData);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });
});
