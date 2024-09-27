import { DependencyList, useEffect } from "react";

export const useInitialEffect = (effect: () => void, deps?: DependencyList) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            effect();
        }
    }, deps);
};