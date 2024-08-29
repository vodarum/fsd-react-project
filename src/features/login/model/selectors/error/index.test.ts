import {
    mockInitialAppState,
    mockAppState,
    mockLoginState,
} from '../../__mocks__';
import { selectError } from './';

describe('selectError', () => {
    test('returns undefined for initial app state', () => {
        expect(selectError(mockInitialAppState)).toBeUndefined();
    });

    test('returns undefined for initial login state', () => {
        expect(selectError(mockAppState)).toBeUndefined();
    });

    test(`returns ${mockLoginState.loading}`, () => {
        const error = 'Some error';

        expect(
            selectError({
                ...mockAppState,
                ...{
                    login: {
                        ...mockAppState.login,
                        error,
                    },
                },
            }),
        ).toBe(error);
    });
});
