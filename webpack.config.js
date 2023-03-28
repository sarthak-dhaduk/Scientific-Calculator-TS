const path = require("path");
module.exports = {
    mode: "development",
    // mode:"production",
    entry: { main: "./src/app.ts", },
    output: {
        path: path.resolve(__dirname, "./build/JS/"),
        filename: "main-bundle.js", // <--- Build this single file...  
    }, 
    resolve: { 
        extensions: [".ts", ".js"], 
    }, 
    module: { 
        rules: [{  loader: "ts-loader", },], 
    },
};