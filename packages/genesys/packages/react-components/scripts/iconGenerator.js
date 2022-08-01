// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

/**
 * Transforms a string into CamelCase
 * @param string Non CamelCased string
 * @returns {string} CamelCased string
 */
function toCamelCase(string) {
    const words = string.split("-");
    return words.map((word) => word[0].toUpperCase() + word.substring(1)).join("");
}

// Folder containing svgs
const svgFolder = process.argv[2];
// Output directory
const outputFolder = process.argv[3];
// Array containing objects with filename and data corresponding to our svgs
const svgs = [];

/**
 * Generates icon component's code
 * @param name Icon name
 * @param data Icon's svg code
 * @param removeFill remove fill boolean
 * @returns {string} Icon component's code
 */
function generateComponent(name, data, removeFill) {
    return `import { SvgIcon, SvgIconProps } from "../../SvgIcon";
import { cx } from "@peersyst/react-utils";
export default function ${name}Icon ({ className, ...rest }: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon {...rest} data-testid="${name}Icon" className={cx(${
        removeFill ? undefined : '"Filled"'
    }, "Icon", className)}>
            ${data}
        </SvgIcon>
    )
}
        `;
}

/**
 * Generates icon component's export inside index
 * @param name Name of the icon
 * @returns {string} Export code
 */
function generateExport(name) {
    const iconName = name + "Icon";
    return `export { default as ${iconName} } from "./${iconName}";`;
}

/**
 * Adds svgs data
 * @param folder Folder path containing svgs
 * @param removeFill Boolean indicating whether to remove the fill property or not.
 */
function addSvgs(folder, removeFill) {
    const replaceRegExp = /<svg.+>|<\/svg>|<\?.*>|style="[^"]*"/gi;
    const filenames = fs.readdirSync(folder);
    for (const filename of filenames) {
        const stat = fs.lstatSync(folder + filename);
        if (stat.isDirectory())
            addSvgs(folder + (filename.endsWith("/") ? filename : filename + "/"), false);
        else if (filename === ".DS_Store") fs.unlinkSync(folder + filename);
        else {
            const data = fs.readFileSync(folder + filename, "utf8");
            const name = filename.split(".")[0];
            svgs.push({
                filename: toCamelCase(name),
                // Remove svg tags and maybe fill. Then, replace all kebab-case svg properties for camelCase React properties
                data: data
                    .replace(replaceRegExp, "")
                    .replace(/-(?=[^"]+=)./g, (x) => x[1].toUpperCase()),
                removeFill: removeFill,
            });
        }
    }
}

/**
 * Adds svgs inside of svgFolder removing fill properties.
 * Fill properties won't be removed for svgs inside of subfolders. In our case, filled folder.
 */
addSvgs(svgFolder, true);

// Create output dir if it doesn't exist
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
    console.log("Created " + outputFolder);
}

// Removes output dir content and writes new SvgComponents
fs.readdir(outputFolder, (error, filenames) => {
    if (error) throw error;
    // Remove old folder contents
    for (const filename of filenames) {
        fs.unlinkSync(outputFolder + filename);
    }

    // Create a component for each svg
    svgs.forEach(({ filename, data, removeFill }) => {
        fs.writeFileSync(
            outputFolder + filename + "Icon.tsx",
            generateComponent(filename, data, removeFill),
        );
        console.log(filename + "Icon.tsx created");
    });

    // Create an index
    fs.writeFileSync(
        outputFolder + "index.tsx",
        svgs.map(({ filename }) => generateExport(filename)).join("\n"),
    );
    console.log("icons index.tsx created");
});
