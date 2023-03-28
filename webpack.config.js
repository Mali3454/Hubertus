module.exports = {
	module: {
		loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
}
