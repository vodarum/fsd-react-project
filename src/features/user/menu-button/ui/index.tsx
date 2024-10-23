import { sessionActions } from 'entities/session';
import { userSelectors } from 'features/user/model';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Avatar } from 'shared/ui/avatar';
import { Dropdown, DropdownItem } from 'shared/ui/popups';

type UserMenuButtonProps = {
    className?: string;
};

export const UserMenuButton = ({ className }: UserMenuButtonProps) => {
    const { t } = useTranslation('navigation');
    const dispatch = useAppDispatch();
    const data = useSelector(userSelectors.selectUserData);
    const handleLogoutClick = useCallback(() => {
        dispatch(sessionActions.resetData());
    }, [dispatch]);

    const items = useMemo<DropdownItem[]>(
        () => [
            {
                content: t('Выйти'),
                onClick: handleLogoutClick,
            },
            {
                content: t('Профиль'),
                to: '/profile',
            },
        ],
        [t, handleLogoutClick],
    );

    return (
        <Dropdown
            className={className}
            anchor='bottom end'
            activator={<Avatar src={data?.avatar} size={30} />}
            items={items}
        />
    );
};
