const path = require("path");

module.exports = {
    name: "nb-setting",
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
                                debug: true,
                            },
                        ],
                        "@babel/preset-react",
                    ],
                    plugins: ["@babel/plugin-proposal-class-properties", "react-hot-loader/babel"],
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist/",
    }, // 출력
};
