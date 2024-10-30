import { resolve as pathResolve } from 'path';
import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/shared/ui/**/*.ts');
project.addSourceFilesAtPaths('src/shared/ui/**/*.tsx');

const sharedUIPath = pathResolve(__dirname, '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.addDirectoryAtPath(sharedUIPath);
const sharedUIChildDirs = sharedUIDirectory.getDirectories();

sharedUIChildDirs.forEach((dir) => {
    const uiPublicAPI = dir.getSourceFile('index.ts');

    if (uiPublicAPI) {
        uiPublicAPI.getExportDeclarations().forEach((expDec) => {
            expDec.toNamespaceExport();
        });
    }
});

project.save();
