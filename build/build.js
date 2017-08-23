// require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')  // 删除工具
var path = require('path')  // 文件路径工具
var chalk = require('chalk')   // 粉笔工具
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('代码生产中...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
	if (err) throw err
	webpack(webpackConfig, function (err, stats) {
		spinner.stop()
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: true,
			chunkModules: false
		}) + '\n\n')

		console.log(chalk.cyan('代码生产完成.\n'))
		console.log(chalk.yellow(
			'温馨提示: 项目需要一个服务器的支持.\n' +
			'直接打开 index.html 是不能工作的哦！！.\n'
		))
	})
})
