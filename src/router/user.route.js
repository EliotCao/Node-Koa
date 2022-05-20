const Router = require('koa-router')

const router = new Router({prefix: '/user'})
const db = [
    { id: 1, name: 'xiaoming', age: 20 },
    { id: 2, name: 'xiaomei', age: 18 },
    { id: 3, name: 'xiaopang', age: 2 },
]

router.get('/', (ctx) => {
    ctx.body = db
})
// GET /users/:id ---- 根据id获取单个用户的信息, 返回一个对象
router.get('/:id', (ctx) => {
    // 解析id参数
    const id = ctx.params.id
    const res = db.filter((item) => item.id == id)

    if (!res[0]) ctx.throw(404)

    ctx.body = res[0]
})
router.post('/', (ctx) => {
    ctx.body = '创建用户'
})

module.exports = router