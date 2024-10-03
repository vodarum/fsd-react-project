import { StoryContext, StoryFn } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = (
    Story: StoryFn,
    { parameters }: StoryContext,
) => {
    const { router } = parameters;

    if (!router) {
        return (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        );
    }

    const { path, route } = router;

    return (
        <MemoryRouter initialEntries={[encodeURI(route)]}>
            <Routes>
                <Route path={path} element={<Story />} />
            </Routes>
        </MemoryRouter>
    );
};
