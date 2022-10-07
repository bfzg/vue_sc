const {
	defineConfig
} = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: (config) => {
		config.resolve = {
			extensions: ['.js', '.json', '.vue'],
			alias: {
				'@': path.resolve(__dirname, './src'),
			}
		}
	}
})
