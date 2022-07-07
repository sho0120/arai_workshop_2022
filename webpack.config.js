const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"),
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "src"),
		},
		port: 3000,
		compress: true,
		hot: true,
		open: true,
		historyApiFallback: true,
		client: {
			overlay: { warnings: false, errors: true },
		},
	},
};
