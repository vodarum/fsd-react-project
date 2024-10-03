import { userActions, userReducer } from '.';
import { mockUsers, mockUserState } from '../__mocks__';
import { ValidateUserErrors } from '../const';
import { update } from '../services';
import { User } from '../types';

const mockUser = mockUsers[0];

describe('userSlice', () => {
    test('setForm', () => {
        const newUser: User = {
            ...mockUser,
            firstName: 'Иван',
            lastName: 'Иванов',
            city: 'Москва',
        };

        expect(
            userReducer(mockUserState, userActions.setForm(newUser)),
        ).toEqual({
            ...mockUserState,
            form: newUser,
        });
    });

    test('cancelEditing', () => {
        expect(
            userReducer(
                {
                    ...mockUserState,
                    editable: true,
                    data: mockUser,
                    form: {
                        ...mockUser,
                        firstName: 'Иван',
                        lastName: 'Иванов',
                        city: 'Москва',
                    },
                },
                userActions.cancelEditing(),
            ),
        ).toEqual({
            ...mockUserState,
            data: mockUser,
            form: mockUser,
        });
    });

    test('setEditable', () => {
        const newEditableValue = true;

        expect(
            userReducer(
                mockUserState,
                userActions.setEditable(newEditableValue),
            ),
        ).toEqual({
            ...mockUserState,
            editable: newEditableValue,
        });
    });

    test('update user pending', () => {
        expect(
            userReducer(
                {
                    ...mockUserState,
                    validateErrors: [ValidateUserErrors.serverError],
                },
                update.pending(''),
            ),
        ).toEqual({
            ...mockUserState,
            loading: true,
            validateErrors: undefined,
        });
    });

    test('update user fulfilled', () => {
        expect(
            userReducer(
                mockUserState,
                update.fulfilled(mockUser, ''),
            ),
        ).toEqual({
            ...mockUserState,
            data: mockUser,
            form: mockUser,
        });
    });
});
