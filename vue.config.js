module.exports = {
	devServer: {
		port: 8080,
		proxy: {
			'/juheNews': {
				target: 'http://v.juhe.cn/toutiao/index', //需要跨域的url
				ws: true, //代理WebSocket
				changeOrigin: true, //允许跨域
				pathRewrite: {
					'^/juheNews': '' //重写路径
				}
			}
		}
	}
}