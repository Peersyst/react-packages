// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

function resolveAliasPath(relativeToBabelConf) {
    const resolvedPath = path.relative(process.cwd(), path.resolve(__dirname, relativeToBabelConf));
    return `./${resolvedPath.replace("\\", "/")}`;
}

const defaultAlias = {};

module.exports = function getBabelConfig(api) {
    const useESModules = api.env(["legacy", "modern", "stable"]);

    const presets = [
        [
            "@babel/preset-env",
            {
                bugfixes: true,
                browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
                debug: process.env.BUILD_VERBOSE === "true",
                modules: useESModules ? false : "commonjs",
                shippedProposals: api.env("modern"),
            },
        ],
        [
            "@babel/preset-react",
            {
                runtime: "automatic",
            },
        ],
        "@babel/preset-typescript",
    ];

    const plugins = [
        [
            "@babel/plugin-transform-runtime",
            {
                useESModules,
                // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
                version: "^7.4.4",
            },
            "babel-plugin-styled-components",
        ],
    ];

    return {
        assumptions: {
            noDocumentAll: true,
        },
        presets,
        plugins,
        ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
        overrides: [
            {
                exclude: /\.test\.(js|ts|tsx)$/,
                plugins: ["@babel/plugin-transform-react-constant-elements"],
            },
        ],
        env: {
            development: {
                plugins: [
                    [
                        "babel-plugin-module-resolver",
                        {
                            alias: defaultAlias,
                            root: ["./"],
                        },
                    ],
                ],
            },
            legacy: {
                plugins: [
                    // IE11 support
                    "@babel/plugin-transform-object-assign",
                ],
            },
            test: {
                sourceMaps: "both",
                plugins: [
                    [
                        "babel-plugin-module-resolver",
                        {
                            root: ["./"],
                            alias: defaultAlias,
                        },
                    ],
                ],
            },
            benchmark: {
                plugins: [
                    [
                        "babel-plugin-module-resolver",
                        {
                            alias: defaultAlias,
                        },
                    ],
                ],
            },
        },
    };
};
