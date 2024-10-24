import { Project } from 'ts-morph';

const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

const project = new Project();

project.addSourceFilesAtPaths('src/**/*{.ts,.tsx}');

project.getSourceFiles().forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((i) => {
        const importPath = i.getModuleSpecifierValue();
        const importPathParts = importPath.split('/');

        if (layers.includes(importPathParts[0])) {
            i.setModuleSpecifier(`@/${importPath}`);
        }
    });
});

project.save();
