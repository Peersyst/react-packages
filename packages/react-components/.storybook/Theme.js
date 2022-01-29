import { create } from "@storybook/theming";

import logo from "./assets/peersyst.png";

export default create({
    base: "dark",
    brandTitle: "Peersyst React Components",
    brandUrl: "https://www.peersyst.com/",
    brandImage: logo,
    colorPrimary: "#61DBFB",
    barSelectedColor: "#61DBFB",
});
