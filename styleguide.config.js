module.exports = {
	components: 'src/**/[A-Z]*.js',
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
			],
		},
	},
};
