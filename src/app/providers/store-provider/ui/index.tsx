import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from '../config/store';
import { ConfigureAppStoreOptions } from '../config/types';

type StoreProviderProps = PropsWithChildren & ConfigureAppStoreOptions;

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    preloadedReducer,
    preloadedState,
}) => {
    const store = configureAppStore({
        preloadedReducer,
        preloadedState,
    });
    return <Provider store={store}>{children}</Provider>;
};
