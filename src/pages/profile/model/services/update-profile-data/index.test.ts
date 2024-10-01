import { updateProfileData } from '.';
import { testAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { mockProfile, mockProfileState } from '../../__mocks__';
import { ValidateProfileErrors } from '../../const';

const profileId = mockProfile.id as number;
const url = `/profile/${profileId}`;

describe('updateProfileData', () => {
    test('with fulfilled', async () => {
        const { callThunk, dispatch, api } = testAsyncThunk(updateProfileData, {
            profile: {
                ...mockProfileState,
                form: mockProfile,
            },
        });

        api.put.mockReturnValueOnce(Promise.resolve({ data: mockProfile }));

        const result = await callThunk(profileId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(api.put).toHaveBeenCalledWith(url, mockProfile);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfile);
    });

    test('with rejected', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');
        const { callThunk, dispatch, api } = testAsyncThunk(updateProfileData, {
            profile: {
                ...mockProfileState,
                form: mockProfile,
            },
        });

        api.put.mockReturnValueOnce(Promise.resolve({ status: 403 }));

        const result = await callThunk(profileId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(1);
        expect(api.put).toHaveBeenCalledWith(url, mockProfile);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileErrors.serverError]);

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });

    test('with rejected by validation error', async () => {
        const spyConsoleError = jest.spyOn(global.console, 'error');
        const { callThunk, dispatch } = testAsyncThunk(updateProfileData, {
            profile: {
                form: { lastName: '' },
            },
        });

        const result = await callThunk(profileId);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(spyConsoleError).toHaveBeenCalledTimes(0);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileErrors.invalidUserData,
            ValidateProfileErrors.invalidLocationData,
        ]);

        spyConsoleError.mockReset();
        spyConsoleError.mockRestore();
    });
});
