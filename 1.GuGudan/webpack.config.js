const path = require("path");
const webpack = require("webpack");

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
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    // preset의 플러그인 중 지난 브라우저 적용 플러그인
                                    browsers: ["> 5% in KR"], // browserslist
                                },
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    plugins: [],
                },
            },
        ],
    },
    plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
    }, // 출력
};
