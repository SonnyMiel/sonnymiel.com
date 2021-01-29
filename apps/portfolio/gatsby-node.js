/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const fs = require("fs");

exports.onPreInit = () => {
    if (process.argv[2] === "build") {
        fs.rmdirSync(path.join(__dirname, "../../dist/portfolio"), { recursive: true });
    }
}

exports.onPostBuild = () => {
    fs.mkdirSync(path.join(__dirname, "../../dist/portfolio/public"), { recursive: true });
    fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "../../dist/portfolio/public"));
}