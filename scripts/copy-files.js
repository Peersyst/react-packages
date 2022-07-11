/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars */
const path = require("path");
const fse = require("fs-extra");
const glob = require("fast-glob");

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "./build");
const srcPath = path.join(packagePath, "./src");

async function includeFileInBuild(file) {
    const sourcePath = path.resolve(packagePath, file);
    const targetPath = path.resolve(buildPath, path.basename(file));
    await fse.copy(sourcePath, targetPath);
    console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function createPackageFile() {
    const packageData = await fse.readFile(path.resolve(packagePath, "./package.json"), "utf8");
    const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } =
        JSON.parse(packageData);

    const newPackageData = {
        ...packageDataOther,
        private: false,
        ...(packageDataOther.main
            ? {
                  main: fse.existsSync(path.resolve(buildPath, "./node/index.js"))
                      ? "./node/index.js"
                      : "./index.js",
                  module: fse.existsSync(path.resolve(buildPath, "./esm/index.js"))
                      ? "./esm/index.js"
                      : "./index.js",
              }
            : {}),
        types: fse.existsSync(path.resolve(buildPath, "./@types/index.d.ts"))
            ? "./@types/index.d.ts"
            : "./index.d.ts",
    };

    const targetPath = path.resolve(buildPath, "./package.json");

    await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), "utf8");
    console.log(`Created package.json in ${targetPath}`);

    return newPackageData;
}

async function run() {
    try {
        await createPackageFile();

        await Promise.all(
            ["./README.md", "./CHANGELOG.md", path.resolve(__dirname, "../LICENSE")].map((file) =>
                includeFileInBuild(file),
            ),
        );
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
