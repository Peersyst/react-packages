module.exports = {
    stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/theming",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
                transcludeMarkdown: true,
            },
        },
    ],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },
    babel: async (options) => ({ ...options, babelrc: false, configFile: false }),
};
