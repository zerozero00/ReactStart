var path = require('path');

var APP_DIR = path.resolve(__dirname, './jsx');
var config={
	entry:APP_DIR + '\\main.js',
	output:{ filename: 'bundle-wpLoader.js'},
	module:{
		loaders:[{
		test:/\.(js|jsx)$/,
		exclude:/node_modules/,
		loader:'babel-loader',
		query:{presets:['es2015','react']}
		}]
	},
	resolve:{extensions:['.js','.jsx']}
};
module.exports=config;
