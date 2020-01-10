import Koa from 'koa'
import router from './src/router'



const app = new Koa()

// router
app.use(router.routes())



app.listen(30001)

