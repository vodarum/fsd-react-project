const capitalize = require('./capitalize');

module.exports = (string) => {
    const stringParts = string.split('-');
    return stringParts.reduce((acc, v) => `${acc}${capitalize(v)}`, '');
};
