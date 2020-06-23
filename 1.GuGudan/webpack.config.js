const path = require("path");

module.exports = {
    name: "Gugudan-setting",
    mode: "development", // 실서비스:production
    devtool: "eval",
    resolve: {
        // 알아서 엔트리명안에 잇는 .js .jsx 확장자 파일을 찾아주고 entry에 추가해주는 옵션
        extensions: [".js", ".jsx"],
    },
    entry: {
        app: ["./client"],
    }, // 압력

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [],
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
    }, // 출력
};
