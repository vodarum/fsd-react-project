import { profileActions, profileReducer } from ".";
import { mockProfile, mockProfileState } from "../__mocks__";
import { Profile } from "../types";

describe('profileSlice', () => {
    test('setForm', () => {
        const newProfile: Profile = {
            ...mockProfile,
            firstName: 'Иван',
            lastName: 'Иванов',
            city: 'Москва',
        };

        expect(
            profileReducer(
                mockProfileState,
                profileActions.setForm(newProfile),
            ),
        ).toEqual({
            ...mockProfileState,
            form: newProfile,
        });
    });

    test('cancelEditing', () => {
        expect(
            profileReducer(
                {
                    ...mockProfileState,
                    editable: true,
                    data: mockProfile,
                    form: {
                        ...mockProfile,
                        firstName: 'Иван',
                        lastName: 'Иванов',
                        city: 'Москва',
                    },
                },
                profileActions.cancelEditing(),
            ),
        ).toEqual({
            ...mockProfileState,
            data: mockProfile,
            form: mockProfile,
        });
    });

    test('setEditable', () => {
        const newEditableValue = true;

        expect(
            profileReducer(
                mockProfileState,
                profileActions.setEditable(newEditableValue),
            ),
        ).toEqual({
            ...mockProfileState,
            editable: newEditableValue,
        });
    });
});
