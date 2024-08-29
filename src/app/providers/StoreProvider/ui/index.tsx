import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from '../store';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
    const store = configureAppStore();
    return <Provider store={store}>{children}</Provider>;
};
