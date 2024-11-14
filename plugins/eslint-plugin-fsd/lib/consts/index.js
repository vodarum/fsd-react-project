const pathPartsDelimiter = /\\|\//;

const allowedLayers = Object.freeze({
    shared: 'shared',
    entities: 'entities',
    features: 'features',
    widgets: 'widgets',
    pages: 'pages',
    app: 'app',
});

const sortedLayers = [...Object.values(allowedLayers), 'app'];

export { pathPartsDelimiter, allowedLayers, sortedLayers };
