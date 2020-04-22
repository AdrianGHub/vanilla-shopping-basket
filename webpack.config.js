const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: "./src/index.js",

	mode: 'development',

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		publicPath: "/",
	},

	devServer: {
		contentBase: path.join(__dirname, "public"),
		compress: true,
		port: 3000,
		hot: true,
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
