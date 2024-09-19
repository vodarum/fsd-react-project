type BuildMode = 'development' | 'production';

type BuildPaths = {
    build: string;
    entry: string;
    html: string;
    src: string;
};

type BuildEnv = {
    mode: BuildMode;
    port: number;
    baseURL: string;
};

type BuildOptions = BuildEnv & {
    paths: BuildPaths;
    isDev: boolean;
    project: 'frontend' | 'storybook' | 'jest';
};

export { BuildEnv, BuildMode, BuildPaths, BuildOptions };
