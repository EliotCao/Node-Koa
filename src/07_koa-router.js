const Koa = require('koa')
const KoaBody = require('koa-body')
const useRoute = require('./router/user.route')
const app = new Koa()
app.use(KoaBody())
app.use(useRoute.routes()).use(useRoute.allowedMethods())
app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})