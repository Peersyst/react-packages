/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint no-console: 0 */
const fs = require("fs");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
const prompt = (query) => new Promise((resolve) => readline.question(query, resolve));

const docgenFolder = ".docusaurus/docusaurus-plugin-react-docgen-typescript/default/";
const apiDocsFolder = "docs/component-api/";

function generateApi(component) {
    return `---
title: ${component}
description: API reference docs for the ${component} component.
---

import { Props } from "@site/src/components"

# ${component} API

API reference docs for the ${component} component.

## Import

\`\`\`tsx
import { ${component} } from "@peersyst/react-native-components"
\`\`\`

## Props

<Props component="${component}" />`;
}

async function main() {
    const component = process.argv[2];

    if (!component) {
        console.error("No component provided.");
        console.log("Usage: generate-api.js <component>");
        process.exit(1);
    }

    if (!fs.existsSync(docgenFolder + component + ".json")) {
        console.error(`No docgen file found for ${component}`);
        process.exit(1);
    }

    // Create the api folder if it doesn't exist
    if (fs.existsSync(apiDocsFolder + component + ".mdx")) {
        let overwrite = await prompt(
            `${component} already exists. Would you like to overwrite it? y/n\n`,
        );
        if (overwrite !== "y") {
            process.exit(0);
        }
    }

    fs.writeFileSync(apiDocsFolder + component + ".mdx", generateApi(component));

    process.exit(0);
}

main();
