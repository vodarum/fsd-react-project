import { updateById } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { mockUsers, mockUserState } from '../../__mocks__';
import { ValidateUserErrors } from '../../const';

const mockUser = mockUsers[0];
const userId = mockUser.id as number;
const url = `/users/${userId}`;

describe('updateById', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(updateById, {
            user: {
                ...mockUserState,
                form: mockUser,
            },
        });

        api.put.mockReturnValueOnce(Promise.resolve({ data: mockUser }));

        const result = await callThunk(userId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.put).toHaveBeenCalledWith(url, mockUser);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockUser);
    });

    test('with rejected', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');
        const { callThunk, dispatch, api } = testAsyncThunk(updateById, {
            user: {
                ...mockUserState,
                form: mockUser,
            },
        });

        api.put.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk(userId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(1);
        expect(api.put).toHaveBeenCalledWith(url, mockUser);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateUserErrors.serverError]);

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });

    test('with rejected by validation error', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');
        const { callThunk, dispatch } = testAsyncThunk(updateById, {
            user: {
                form: { lastName: '' },
            },
        });

        const result = await callThunk(userId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(0);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateUserErrors.invalidUserData,
            ValidateUserErrors.invalidLocationData,
        ]);

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });
});