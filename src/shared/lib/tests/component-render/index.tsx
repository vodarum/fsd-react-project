import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import {
    ConfigureAppStoreOptions,
    State,
    StoreProvider,
} from '@/app/providers/store-provider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTesting from '@/shared/config/i18n/i18n-for-testing';

type ComponentRenderOptions = {
    route?: string;
} & DeepPartial<ConfigureAppStoreOptions>;

export const componentRender = (
    component: ReactNode,
    options: ComponentRenderOptions = {},
) => {
    const { route = '/', preloadedReducer, preloadedState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                preloadedReducer={preloadedReducer as ReducersMapObject<State>}
                preloadedState={preloadedState as State}
            >
                <I18nextProvider i18n={i18nForTesting}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
