const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: ["@babel/polyfill", "./src/index.jsx"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'dist'), // Каталог для статики
		},
		open: true, // Автоматически открывать браузер
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new CleanWebpackPlugin()
	],
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.(jpg|jpeg|png|svg)/,
				use: ["file-loader"]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
		]
	}
}