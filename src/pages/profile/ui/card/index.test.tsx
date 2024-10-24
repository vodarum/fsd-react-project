import { screen } from '@testing-library/react';
import { ProfileCard } from '.';
import { mockUsers } from '@/entities/user';
import { mockUserState, userReducer } from '@/features/user';
import { componentRender } from '@/shared/lib/tests/component-render';

const mockUser = mockUsers[0];
const options: Parameters<typeof componentRender>[1] = {
    preloadedReducer: {
        user: userReducer,
    },
    preloadedState: {
        user: {
            ...mockUserState,
            form: mockUser,
        },
    },
};

describe('ProfileCard', () => {
    test('test render', async () => {
        componentRender(<ProfileCard />, options);

        const wrapper = screen.getByTestId('ProfileCard.wrapper');
        expect(wrapper.querySelector('.text-error')).not.toBeInTheDocument();
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            mockUser.firstName,
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
            mockUser.lastName,
        );
    });
});
