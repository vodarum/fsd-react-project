import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Suspense, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { sessionActions, sessionSelectors } from '@/entities/session';
import { fetchById } from '@/features/user';
import { APP_SESSION_LS_KEY } from '@/shared/api';
import { classNames } from '@/shared/lib/class-names';
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks';
import { useTheme } from '@/shared/lib/theme';
import { MenuButton } from '@/shared/ui/menu-button';
import { SettingsButton } from '@/shared/ui/settings-button';
import { Navbar } from '@/widgets/navbar';
import { LeftSidebar } from '@/widgets/left-sidebar';
import { RightSidebar } from '@/widgets/right-sidebar';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const session = useSelector(sessionSelectors.selectSessionData);

    const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState<boolean>(false);

    const handleLeftSidebarToggleBtnClick = useCallback(() => {
        setLeftSidebarOpen((prev) => !prev);
    }, []);

    const handleRightSidebarToggleBtnClick = useCallback(() => {
        setRightSidebarOpen((prev) => !prev);
    }, []);

    const handleRightSidebarClose = useCallback(() => {
        setRightSidebarOpen(false);
    }, []);

    useInitialEffect(() => {
        const userSession = localStorage.getItem(APP_SESSION_LS_KEY);

        if (userSession) {
            dispatch(sessionActions.setData(JSON.parse(userSession)));
        }
    }, [dispatch]);

    useInitialEffect(() => {
        if (session?.userId) {
            localStorage.setItem(APP_SESSION_LS_KEY, JSON.stringify(session));
            // @ts-ignore
            dispatch(fetchById(session.userId));
        }
    }, [dispatch, session]);

    return (
        <div className={classNames('app layout', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar
                    className='layout-navbar'
                    append={
                        <SettingsButton
                            onClick={handleRightSidebarToggleBtnClick}
                        />
                    }
                    prepend={
                        <MenuButton onClick={handleLeftSidebarToggleBtnClick} />
                    }
                />
                <LeftSidebar
                    className='layout-sidebar'
                    open={leftSidebarOpen}
                />
                <RightSidebar
                    open={rightSidebarOpen}
                    onClose={handleRightSidebarClose}
                />
                <main className='layout-main'>
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};
