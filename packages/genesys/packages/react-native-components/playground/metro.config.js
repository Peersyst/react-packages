/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, "../../../../..");
const packageRoot = path.resolve(projectRoot, "..");

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    ...config.resolver.nodeModulesPaths,
    path.resolve(projectRoot, "node_modules"),
    path.resolve(packageRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
    path.resolve(packageRoot, "src"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// Seems like it is not necessary to enable this.
// Causes the following errors:
// - Property 'SharedArrayBuffer' doesn't exist error
// - Cannot read property 'URLSearchParams' of undefined
// - Cannot read property 'prototype' of undefined
// config.resolver.disableHierarchicalLookup = true;

module.exports = config;
