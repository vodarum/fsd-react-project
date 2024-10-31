import { State } from '@/app/providers/store-provider';
import { useSelector } from 'react-redux';

type Selector<T> = (state: State) => T;
type Result<T> = [() => T, Selector<T>];

export const buildSelector = <T>(selector: Selector<T>): Result<T> => {
    const useSelectorHook = () => useSelector(selector);
    return [useSelectorHook, selector];
};
