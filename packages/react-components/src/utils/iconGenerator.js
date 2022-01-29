const fs = require("fs");

const svgFolder = process.argv[2];
const outputFolder = process.argv[3];
const svgs = [];

function generateComponent(name, data) {
    return (
        'import React from "react";\n' +
        'import { SvgIcon, SvgIconProps } from "../..";\n' +
        "export function " +
        name +
        "Icon" +
        '(props: Omit<SvgIconProps, "children">): JSX.Element {\n' +
        'return <SvgIcon {...props} data-testid="' +
        name +
        "Icon" +
        '">' +
        data +
        "</SvgIcon>\n" +
        "}"
    );
}

function generateExport(name) {
    return 'export * from "./' + name + 'Icon";';
}

fs.readdir(svgFolder, (error, filenames) => {
    if (error) throw error;
    for (const filename of filenames) {
        const data = fs.readFileSync(svgFolder + filename, "utf8");
        const name = filename.split(".")[0];
        svgs.push({
            filename: name[0].toUpperCase() + name.substring(1),
            data: data.replace(/<svg.+>|<\/svg>|<\?.*>|fill=".+"/gi, ""),
        });
    }

    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
        console.log("Created " + outputFolder);
    }

    fs.readdir(outputFolder, (error, filenames) => {
        if (error) throw error;
        for (const filename of filenames) {
            fs.unlinkSync(outputFolder + filename);
        }

        svgs.forEach(({ filename, data }) => {
            fs.writeFileSync(outputFolder + filename + "Icon.tsx", generateComponent(filename, data));
            console.log(filename + "Icon.tsx created");
        });

        fs.writeFileSync(outputFolder + "index.ts", svgs.map(({ filename }) => generateExport(filename)).join("\n"));
        console.log("index.ts created");
    });
});
