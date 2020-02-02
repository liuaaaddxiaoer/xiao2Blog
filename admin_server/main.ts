import Koa from 'koa'
import router from './src/router'
import body from 'koa-body'



const app = new Koa()

// body
app.use(body({
  multipart: true, // 可以解析files

}));

// router
app.use(router.routes())



app.listen(30001)

