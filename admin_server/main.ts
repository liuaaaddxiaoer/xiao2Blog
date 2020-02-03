import Koa from 'koa'
import router from './src/router'
import koaBody from 'koa-body'
import cors from 'koa2-cors'



const app = new Koa()

// body]
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 1 * 1024 * 1024, // 1M, default 2M
    keepExtensions: true,
  },
  onError: (err, ctx) => {
    ctx.body = err.message
  },
}))

// 跨域
app.use(cors())


// router
app.use(router.routes())





app.listen(30001)

