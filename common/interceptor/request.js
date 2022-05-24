/*
	负责拦截所有request
	统一处理请求/响应的公共逻辑部分
*/

uni.addInterceptor('request', {
	invoke(args) {
		// request 触发前拼接 url 
		args.url = 'https://www.example.com/' + args.url
	},
	success(args) {
		console.log(args);
	},
	fail(err) {

	},
	complete(res) {

	}
})
