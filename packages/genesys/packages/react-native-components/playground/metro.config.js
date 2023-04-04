/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, "../../../../..");
const packageRoot = path.resolve(projectRoot, "..");
const packagesRoot = path.resolve(projectRoot, "../..");

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
    path.resolve(packageRoot, "node_modules"),
    path.resolve(packageRoot, "src"),
    path.resolve(packagesRoot, "react-components-core"),
    path.resolve(packagesRoot, "react-hooks"),
    path.resolve(packagesRoot, "react-native-utils"),
    path.resolve(packagesRoot, "react-utils"),
    path.resolve(packagesRoot, "react-types"),
    path.resolve(workspaceRoot, "packages/react-native-styled"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
