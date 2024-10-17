const { toCamelCase, toPascalCase } = require('../../helpers');

module.exports = (sliceName) => {
    const camelSliceName = toCamelCase(sliceName);
    const pascalSliceName = toPascalCase(sliceName);

    return `import { ${camelSliceName}Actions, ${camelSliceName}Reducer } from '.';
import {
    mockItems,
    mock${pascalSliceName}EntityState,
    mock${pascalSliceName}State,
} from '../__mocks__';
import { fetchData } from '../services';

describe('${camelSliceName}Slice', () => {
    test('setField', () => {
        expect(mock${pascalSliceName}State).toEqual({
            ...mock${pascalSliceName}State,
            field: '',
        });

        const value = 'value';

        expect(
            ${camelSliceName}Reducer(
                mock${pascalSliceName}State,
                ${camelSliceName}Actions.setField(value),
            ),
        ).toEqual({
            ...mock${pascalSliceName}State,
            field: value,
        });
    });

    test('fetchData pending', () => {
        expect(
            ${camelSliceName}Reducer(
                {
                    ...mock${pascalSliceName}State,
                    error: 'Some error',
                },
                fetchData.pending('', {}),
            ),
        ).toEqual({
            ...mock${pascalSliceName}State,
            loading: true,
            error: undefined,
        });
    });

    test('fetchData fulfilled', () => {
        expect(
            ${camelSliceName}Reducer(
                mock${pascalSliceName}State,
                fetchData.fulfilled(mockItems, '', {}),
            ),
        ).toEqual({
            ...mock${pascalSliceName}State,
            entities: mock${pascalSliceName}EntityState.entities,
            ids: mock${pascalSliceName}EntityState.ids,
        });
    });
});
`;
};
