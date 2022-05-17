//一.导入koa包
const Koa = require('koa')
//二.实例化app对象
const app = new Koa()
//三.编写中间件
app.use((ctx, next) => {
    console.log('我来组成头部')
    next()
    console.log('我来组成头部 End')
})
app.use((ctx, next) => {
    console.log('我来组成身体')
    next()
    console.log('我来组成身体 End')
})
app.use((ctx, next) => {
    console.log('组装完成')
    ctx.body = '组装完成'
})
//四.启动服务，监听3000端口
app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})