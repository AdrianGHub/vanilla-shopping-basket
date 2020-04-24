const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js"
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
		new webpack.HotModuleReplacementPlugin()
	],
};
