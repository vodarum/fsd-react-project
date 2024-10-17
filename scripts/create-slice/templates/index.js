const createPublicApiTemplate = require('./create-public-api-template');
const {
    createMocksTemplate,
    createModelPublicApiTemplate,
    createReduxSliceTemplate,
    createReduxSliceTestTemplate,
    createTypesTemplate,
} = require('./model');
const {
    createComponentTemplate,
    createStoryTemplate,
    createStyleTemplate,
    createTestTemplate,
} = require('./ui');

module.exports = {
    createPublicApiTemplate,
    createMocksTemplate,
    createModelPublicApiTemplate,
    createReduxSliceTemplate,
    createReduxSliceTestTemplate,
    createTypesTemplate,
    createComponentTemplate,
    createStoryTemplate,
    createStyleTemplate,
    createTestTemplate,
};
