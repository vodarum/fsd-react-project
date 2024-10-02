import './styles/index.scss';
import { AppRouter } from './providers/router';
import { sessionActions } from 'entities/session';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { APP_SESSION_LS_KEY } from 'shared/api';
import { classNames } from 'shared/lib/class-names';
import { useTheme } from 'shared/lib/theme';
import { Navbar } from 'widgets/navbar';
import { LeftSidebar } from 'widgets/left-sidebar';
import { RightSidebar } from 'widgets/right-sidebar';
import { MenuButton } from 'shared/ui/menu-button';
import { SettingsButton } from 'shared/ui/settings-button';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

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

    useEffect(() => {
        const userSession = localStorage.getItem(APP_SESSION_LS_KEY);

        if (userSession) {
            dispatch(sessionActions.setData(JSON.parse(userSession)));
        }
    }, [dispatch]);

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
