declare module '*.module.css';
declare module '*.module.scss';
declare const __IS_DEV__: boolean;
declare const __BASE_URL__: string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
