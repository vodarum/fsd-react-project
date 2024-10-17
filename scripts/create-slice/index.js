const { resolve: pathResolve } = require('node:path');
const { mkdir } = require('node:fs/promises');
const createPublicApi = require('./create-public-api');
const { createModel, createUI } = require('./segments');

const createSlice = async () => {
    const correctLayers = ['entities', 'features', 'widgets', 'pages'];

    const layer = process.argv[2];
    const slice = process.argv[3];

    if (!correctLayers.includes(layer)) {
        throw new Error('Укажите корректное название слоя');
    }

    if (!slice) {
        throw new Error('Укажите название слайса');
    }

    const slicePath = pathResolve(__dirname, '..', '..', 'src', layer, slice);

    await mkdir(slicePath);

    await Promise.all([
        createModel(slicePath, slice),
        createUI(slicePath, layer, slice),
        createPublicApi(slicePath),
    ]);
};

createSlice();
