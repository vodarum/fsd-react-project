export const classNames = (
    base: string,
    conditional: Record<string, boolean> = {},
    additional: string[] = []
): string => {
    return [
        base,
        ...Object.keys(conditional).filter((k) => conditional[k]),
        ...additional.filter(Boolean),
    ].join(' ');
};