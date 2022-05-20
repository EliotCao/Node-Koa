const Router = require('koa-router')

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

module.exports = router