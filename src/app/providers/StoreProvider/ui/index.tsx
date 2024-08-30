import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from '../store';
import { State } from '../types';

type StoreProviderProps = PropsWithChildren & {
    initialState?: State;
};

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    initialState,
}) => {
    const store = configureAppStore(initialState);
    return <Provider store={store}>{children}</Provider>;
};
