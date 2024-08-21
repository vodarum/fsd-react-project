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
};

type BuildOptions = BuildEnv & {
    paths: BuildPaths;
    isDev: boolean;
};

export { BuildEnv, BuildMode, BuildPaths, BuildOptions };
