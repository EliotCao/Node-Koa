const Router = require('koa-router')

const router = new Router({prefix: '/user'})

router.get('/', (ctx) => {
    ctx.body = '用户页'
})
router.post('/', (ctx) => {
    ctx.body = '创建用户'
})

module.exports = router