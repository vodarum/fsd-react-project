const { toCamelCase, toPascalCase } = require('../../helpers');

module.exports = (sliceName) => {
    const camelSliceName = toCamelCase(sliceName);
    const pascalSliceName = toPascalCase(sliceName);

    return `import {
    ${camelSliceName}Selectors as custom${pascalSliceName}Selectors,
} from './selectors';
import {
    ${camelSliceName}Actions,
    ${camelSliceName}Reducer,
    ${camelSliceName}Selectors as entityAdapter${pascalSliceName}Selectors,
} from './slices';

const ${camelSliceName}Selectors = {
    ...entityAdapter${pascalSliceName}Selectors,
    ...custom${pascalSliceName}Selectors,
};

export * from './__mocks__';
export * from './services';
export type * from './types';
export {
    ${camelSliceName}Actions,
    ${camelSliceName}Reducer,
    ${camelSliceName}Selectors,
};`;
};
