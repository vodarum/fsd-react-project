import { fetchById } from '.';
import { mockUsers } from '@/entities/user/testing';
import { testAsyncThunk } from '@/shared/lib/tests/test-async-thunk';

const mockUser = mockUsers[0];
const userId = mockUser.id as number;
const url = `/users/${userId}`;

describe('fetchById', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(fetchById);

        api.get.mockReturnValueOnce(Promise.resolve({ data: mockUser }));

        const result = await callThunk(userId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.get).toHaveBeenCalledWith(url);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockUser);
    });

    test('with rejected', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');
        const { callThunk, dispatch, api } = testAsyncThunk(fetchById);

        api.get.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk(userId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(1);
        expect(api.get).toHaveBeenCalledWith(url);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error: Error');

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });
});
