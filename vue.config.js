module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://vue-blog.test',
				changeOrigin: true
			},
		}
	}
}
