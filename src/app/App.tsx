import './styles/index.scss';
import { useTheme } from 'shared/lib/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/user';
import { APP_SESSION_LS_KEY } from 'shared/config/const';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleDrawer = () => {
        setCollapsed((prev) => !prev);
    };

    useEffect(() => {
        const sessionUser = localStorage.getItem(APP_SESSION_LS_KEY);

        if (sessionUser) {
            dispatch(userActions.setSession(JSON.parse(sessionUser)));
        }
    }, [dispatch]);

    return (
        <div className={classNames('app layout', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar
                    className='layout-navbar'
                    handlerDrawer={toggleDrawer}
                />
                <Sidebar className='layout-sidebar' collapsed={collapsed} />
                <main className='layout-main'>
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};
