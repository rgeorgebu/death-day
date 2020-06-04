const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function config(env) {
	env = env || 'development';

	const release = env === 'production';

	return {
		mode: env,
		entry: {
			bundle: './src/index'
		},
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: '[name].js'
		},
		resolve: {
			extensions: ['.jsx', '.js']
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					include: [
						path.resolve(__dirname, 'src'),
					],
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.(s[ac]ss|css)$/,
					use: [
						release ? MiniCssExtractPlugin.loader : 'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: release ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]'
								},
								importLoaders: 2
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer({
										overrideBrowserslist: [
											'last 2 versions',
											'>0.5% in US',
											'not dead'
										]
									})
								]
							}
						},
						'sass-loader'
					]
				},
				{
					test: /\.(png|jpg)$/,
					use: {
						loader: 'url-loader',
						options: {
							name: '[name]-[hash].[ext]',
							limit: 100000
						}
					}
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({ filename: '[name].css' }),
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify(env)
				}
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'templates/index.html'),
				inject: true
			})
		],
		devtool: !release && 'eval',
		optimization: {
			minimize: release
		},
		devServer: {
			contentBase: path.resolve(__dirname, 'public'),
			compress: true,
			port: 8080,
			hot: true,
			open: true
		}
	};
};
