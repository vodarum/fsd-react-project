const { toPascalCase } = require('../../helpers');

module.exports = (sliceName) => {
    const stateTypeName = `${toPascalCase(sliceName)}State`;

    return `type ${stateTypeName} = {};
    
export { ${stateTypeName} };`;
};
