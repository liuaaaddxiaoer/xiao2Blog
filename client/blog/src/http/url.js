import {NODE_ENV} from '../../config/dev.env.js'

let isDev = NODE_ENV.indexOf(process.env.NODE_ENV)


export const BASE_URL = isDev ? 'http://127.0.0.1:8000/api2/' : 'https://www.liuxiaoer.club/api2/'

export const ARTICLE_LIST = 'api/articleList'

export const CATEGORY_LIST = 'api/categoryList'

export const ARTICLE_COUNT = 'api/articleCount'



