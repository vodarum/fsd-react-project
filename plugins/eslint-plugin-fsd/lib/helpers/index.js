import mm from 'micromatch';
import { allowedLayers, pathPartsDelimiter } from '../consts/index.js';

const isEntitiesTypesCrossImport = (currentFilePathParts, importPathParts) =>
    currentFilePathParts[0] === allowedLayers.entities &&
    importPathParts[0] === allowedLayers.entities &&
    currentFilePathParts.some((p) => /types?\..+/.test(p)) &&
    importPathParts[2] === '@x';

const isMatch = (path, patterns) => patterns.some((p) => mm.isMatch(path, p));

const isRelative = (path) => {
    return path === '.' || path.startsWith('./') || path.startsWith('../');
};

const isSharedLayer = (layer) => layer === allowedLayers.shared;

const splitPath = (path) => path.split(pathPartsDelimiter);

const splitPathByCwd = (currentFilePath, cwd) => {
    const currentFilePathInRoot = currentFilePath.split(cwd)[1];
    return splitPath(currentFilePathInRoot).slice(2);
};

export {
    isEntitiesTypesCrossImport,
    isMatch,
    isRelative,
    isSharedLayer,
    splitPath,
    splitPathByCwd,
};
