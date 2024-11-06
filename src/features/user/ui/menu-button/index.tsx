import { sessionActions } from '@/entities/session';
import { userSelectors } from '../../model';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Avatar } from '@/shared/ui/avatar';
import { Dropdown, DropdownItem } from '@/shared/ui/popups';

type UserMenuButtonProps = {
    className?: string;
};

export const UserMenuButton = ({ className }: UserMenuButtonProps) => {
    const { t } = useTranslation('navigation');
    const dispatch = useAppDispatch();
    const data = useSelector(userSelectors.selectUserData);
    const userIsLoading = useSelector(userSelectors.selectLoading);
    const hasRole = useSelector(userSelectors.selectHasRole);
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
            ...(hasRole('admin')
                ? [
                      {
                          content: t('Админ панель'),
                          to: '/admin',
                      } as DropdownItem,
                ]
                : []),
        ],
        [t, handleLogoutClick, hasRole],
    );

    const avatar = <Avatar src={data?.avatar} size={30} />;

    if (userIsLoading) return avatar;

    return (
        <Dropdown
            className={className}
            anchor='bottom end'
            activator={avatar}
            items={items}
        />
    );
};
