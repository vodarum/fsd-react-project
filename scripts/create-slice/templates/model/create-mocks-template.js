const { toCamelCase, toPascalCase } = require('../../helpers');

module.exports = (sliceName) => {
    const camelSliceName = toCamelCase(sliceName);
    const pascalSliceName = toPascalCase(sliceName);

    return `import type { State } from 'app/providers/store-provider';
import type { ${pascalSliceName}, ${pascalSliceName}State } from '../types';

const mockItems: ${pascalSliceName}[] = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
];

const mock${pascalSliceName}EntityState: Pick<${pascalSliceName}State, 'entities' | 'ids'> = {
    ids: mockItems.map((a) => a.id),
    entities: mockItems.reduce(
        (accumulator, a) => ({ ...accumulator, [a.id]: a }),
        {},
    ),
};

const mock${pascalSliceName}State: ${pascalSliceName}State = {
    loading: false,
    ids: [],
    entities: {},
};

const mockAppState: State = {
    ${camelSliceName}: mock${pascalSliceName}State,
} as State;

const mockInitialAppState: State = {} as State;

export {
    mockAppState,
    mockItems,
    mock${pascalSliceName}EntityState,
    mock${pascalSliceName}State,
    mockInitialAppState,
};`;
};
