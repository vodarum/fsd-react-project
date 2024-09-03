type ConditionalClasses = Record<string, boolean | undefined>;

export const classNames = (
    base: string,
    conditional: ConditionalClasses = {},
    additional: Array<string | undefined> = [],
): string => {
    return [
        base,
        ...Object.keys(conditional).filter((k) => conditional[k]),
        ...additional.filter(Boolean),
    ].join(' ');
};
