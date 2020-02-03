import Router from 'koa-router'

import koa from 'koa'
import fs from 'fs'
import path from 'path'
import ps from 'process'

const router = new Router()

router.get('/', async (ctx) => {

  ctx.body = 'hello home'
})


// 文件处理
async function handleUploadFiles(ctx: koa.Context) {
  console.log(ctx.request.files);
  let files = ctx.request.files || {}
  let file = files['file']
  let readStream = null

  if (file) {
    readStream = fs.createReadStream(file.path)
  }
  if (!file) return


  let staticPath = path.resolve(__dirname, '../../', 'static');

  // 创建目录
  let dirPath = path.join(staticPath, 'com.liuxiaoer.001')

  let dirExistsFlag = fs.existsSync(dirPath)

  if (!dirExistsFlag) {
    fs.mkdirSync(dirPath)
    // cd
    console.log(ps.cwd())

  } else {
    console.log('已经存在了')
    console.log(ps.cwd())

    // 进入目录创建
    ps.chdir(dirPath)
    console.log('ok -', ps.cwd())

    // 覆盖的方式创建文件
    let writeStream = fs.createWriteStream(path.join(ps.cwd(), 'apns.p8'))

    // 写入
    await readStream?.pipe(writeStream)

  }

  console.log(staticPath)
}

router.post('/upload/', async (ctx) => {


  // 文件处理
  const path = await handleUploadFiles(ctx)
  ctx.body = 'upload'

})

export default router