/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const Colors = require("./color.json");

let data = "";
let data3 = "";
Object.entries(Colors).forEach(([k, v]) => {
    data += `$${k}: ${v};\n`;
});

Object.entries(Colors).forEach(([k, v]) => {
    data3 += `"${k}": ${v},\n`;
});

data += "\n $colors: (" + data3 + ")";

let data2 = "";
Object.entries(Colors).forEach(([k, v]) => {
    data2 += `${k.toUpperCase()} = "${k}",\n`;
});

data2 = "export enum ColorVariants{ \n" + data2 + "}";

fs.writeFile("./src/colors.ts", data2, (err) => {
    if (err) {
        throw err;
    }
});

fs.writeFile("./src/styles/colors.scss", data, (err) => {
    if (err) {
        throw err;
    }
});
