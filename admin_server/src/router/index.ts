import Router from 'koa-router'
import koa from 'koa'

const router = new Router()

router.get('/', async (ctx) => {

  ctx.body = 'hello home'
})

// 文件处理
function handleUploadFiles(ctx: koa.Context) {
  console.log(ctx.request.files);
}

router.post('upload/', async (ctx) => {


  // 文件处理
  const path = await handleUploadFiles(ctx)
  ctx.body = 'upload'
})

export default router