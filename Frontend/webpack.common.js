var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		vendor: ["react",
			"react-dom",
			"whatwg-fetch",
			"core-js/fn/promise"
		],
		app: ["./src/app.tsx"]
	},
	output: {
		filename: "[name].bundle.js",
		path: __dirname + "/dist"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	plugins: [
		// new ExtractTextPlugin({
		// 	filename: 'spo.cdn.manager.css',
		// 	allChunks: true
		// }),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		})
	],
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
				options: {
					configFileName: 'tsconfig.json'
				}
			},
			{
				test: /\.tsx?$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					configFileName: 'tslint.json'
				}
			}//,
			// {
			// 	test: /\.scss$/,
			// 	loader: ExtractTextPlugin.extract({
			// 		use: ['css-loader', 'sass-loader'],
			// 		fallback: 'style-loader'
			// 	})
			// }
		]
	}
};