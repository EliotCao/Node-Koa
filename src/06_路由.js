const Koa = require('koa')

const app = new Koa()

app.use((ctx) => {
    // ctx.request: http请求
    // ctx.response: http响应
    // ctx.request.url == ctx.url
    if (ctx.request.url === '/') {
        ctx.response.body = '这是主页'
    } else if (ctx.request.url === '/user') {
        if (ctx.request.method === 'GET') {
            ctx.response.body = '这是用户页'
        } else if (ctx.request.method === 'post')  {
            ctx.response.body = '创建用户'
            ctx.status.code = '405'
        }
    } else {
        ctx.status.code = '404'
    }
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})