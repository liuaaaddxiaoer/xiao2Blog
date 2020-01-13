import Router from 'koa-router'
import fs from 'fs'
import  * as fo from 'formidable'

const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = 'hello home'
})

router.post('/upload', async (ctx, next) => {

  console.log(ctx.request.files)
  let files = ctx.request.files

  console.log(typeof files)
  if (typeof files == 'object') {
    let filesnew  = (files.file as fo.File)
    const reader = fs.createReadStream(filesnew.path)

    // 写
    console.log(filesnew)
  }

  ctx.body = '111'
})

export default router