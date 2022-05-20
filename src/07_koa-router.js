const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
    ctx.body = '这是主页'
})
router.get('/user', (ctx) => {
    ctx.body = '用户页'
})
router.post('/user', (ctx) => {
    ctx.body = '创建用户'
})
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8080, () => {
    console.log('server is running on http://localhost:8080')
})