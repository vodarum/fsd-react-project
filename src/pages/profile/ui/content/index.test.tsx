import { fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ProfilePageContent } from '.';
import { mockSession } from '@/entities/session/testing';
import { mockUsers } from '@/entities/user/testing';
import { mockUserState, userReducer } from '@/features/user/testing';
import { Countries } from '@/shared/api';
import { componentRender } from '@/shared/lib/tests/component-render';

const mockUser = mockUsers[0];
const options: Parameters<typeof componentRender>[1] = {
    preloadedReducer: {
        user: userReducer,
    },
    preloadedState: {
        session: { data: mockSession },
        user: {
            ...mockUserState,
            data: mockUser,
            form: mockUser,
        },
    },
};

describe('ProfilePageContent', () => {
    test('ProfileButtonBar and ProfileCard should be displayed', async () => {
        componentRender(<ProfilePageContent />, options);

        expect(
            screen.getByTestId('ProfileButtonBar.wrapper'),
        ).toBeInTheDocument();
        expect(screen.getByTestId('ProfileCard.wrapper')).toBeInTheDocument();
    });

    test('ProfileButtonBar.cancel and ProfileButtonBar.save should be displayed if click on ProfileButtonBar.edit', async () => {
        componentRender(<ProfilePageContent />, options);

        expect(screen.getByTestId('ProfileButtonBar.edit')).toBeInTheDocument();

        await userEvent.click(screen.getByTestId('ProfileButtonBar.edit'));

        expect(
            screen.getByTestId('ProfileButtonBar.cancel'),
        ).toBeInTheDocument();
        expect(screen.getByTestId('ProfileButtonBar.save')).toBeInTheDocument();
    });

    test('ProfileCard fields enabled if click on ProfileButtonBar.edit', async () => {
        componentRender(<ProfilePageContent />, options);

        const attr = 'disabled';
        const firstnameField = screen.getByTestId('ProfileCard.firstname');
        const lastnameField = screen.getByTestId('ProfileCard.lastname');
        const birthdayField = screen.getByTestId('ProfileCard.birthday');
        const countryField = screen.getByTestId('ProfileCard.country');

        expect(firstnameField).toHaveAttribute(attr);
        expect(lastnameField).toHaveAttribute(attr);
        expect(birthdayField).toHaveAttribute(attr);
        expect(countryField).toHaveAttribute(attr);

        await userEvent.click(screen.getByTestId('ProfileButtonBar.edit'));

        expect(firstnameField).not.toHaveAttribute(attr);
        expect(lastnameField).not.toHaveAttribute(attr);
        expect(birthdayField).not.toHaveAttribute(attr);
        expect(countryField).not.toHaveAttribute(attr);
    });

    test('ProfileCard fields have prev value if click on ProfileButtonBar.cancel', async () => {
        componentRender(<ProfilePageContent />, options);

        const firstnameField = screen.getByTestId('ProfileCard.firstname');
        const lastnameField = screen.getByTestId('ProfileCard.lastname');
        const birthdayField = screen.getByTestId(
            'ProfileCard.birthday',
        ) as HTMLInputElement;
        const countryField = screen.getByTestId('ProfileCard.country');

        expect(firstnameField).toHaveValue(mockUser.firstName);
        expect(lastnameField).toHaveValue(mockUser.lastName);
        expect(birthdayField).toHaveValue(mockUser.birthday);
        expect(countryField).toHaveValue(mockUser.country);

        await userEvent.click(screen.getByTestId('ProfileButtonBar.edit'));

        const firstnameNewValue = '';
        const lastnameNewValue = '';
        const birthdayNewValue = mockUsers[1].birthday as string;
        const countryNewValue = Countries.Armenia;

        await Promise.all([
            userEvent.clear(firstnameField),
            userEvent.clear(lastnameField),
            fireEvent.change(birthdayField, {
                target: { value: birthdayNewValue },
            }),
            fireEvent.change(countryField, {
                target: { value: countryNewValue },
            }),
        ]);

        expect(firstnameField).toHaveValue(firstnameNewValue);
        expect(lastnameField).toHaveValue(lastnameNewValue);
        expect(birthdayField).toHaveValue(birthdayNewValue);
        expect(countryField).toHaveValue(countryNewValue);

        await userEvent.click(screen.getByTestId('ProfileButtonBar.cancel'));

        expect(firstnameField).toHaveValue(mockUser.firstName);
        expect(lastnameField).toHaveValue(mockUser.lastName);
        expect(birthdayField).toHaveValue(mockUser.birthday);
        expect(countryField).toHaveValue(mockUser.country);
    });

    test('shows errors if save invalid data', async () => {
        componentRender(<ProfilePageContent />, options);

        const firstnameField = screen.getByTestId('ProfileCard.firstname');
        const lastnameField = screen.getByTestId('ProfileCard.lastname');
        const cityField = screen.getByTestId('ProfileCard.city');

        await userEvent.click(screen.getByTestId('ProfileButtonBar.edit'));

        await Promise.all([
            userEvent.clear(firstnameField),
            userEvent.clear(lastnameField),
            userEvent.clear(cityField),
        ]);

        await userEvent.click(screen.getByTestId('ProfileButtonBar.save'));

        const errors = screen
            .getByTestId('ProfileCard.wrapper')
            .querySelectorAll('.text-error');

        expect(errors.length).toBe(2);
        expect(errors[0]).toHaveTextContent('Некорректные имя или фамилия');
        expect(errors[1]).toHaveTextContent('Некорректные город или страна');
    });

    test('ProfileCard fields have new values after save valid data', async () => {
        componentRender(<ProfilePageContent />, options);

        const firstnameField = screen.getByTestId('ProfileCard.firstname');
        const countryField = screen.getByTestId('ProfileCard.country');
        const cityField = screen.getByTestId('ProfileCard.city');

        await userEvent.click(screen.getByTestId('ProfileButtonBar.edit'));

        const firstnameNewValue = 'Имя';
        const countryNewValue = Countries.Belarus;
        const cityNewValue = 'Минск';

        fireEvent.change(firstnameField, {
            target: { value: firstnameNewValue },
        });
        fireEvent.change(countryField, {
            target: { value: countryNewValue },
        });
        fireEvent.change(cityField, {
            target: { value: cityNewValue },
        });

        await userEvent.click(screen.getByTestId('ProfileButtonBar.save'));

        expect(firstnameField).toHaveValue(firstnameNewValue);
        expect(countryField).toHaveValue(countryNewValue);
        expect(cityField).toHaveValue(cityNewValue);
    });
});
