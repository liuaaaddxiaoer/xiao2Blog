import http from './index'

import * as url from './url'

export default {

  // 获取文章列表
  articleList: (params = {}, config = {}) => {
    return http.post(url.ARTICLE_LIST, params, config);
  },

  // 获取分类列表
  categoryList: (params = {}, config = {}) => {
    return http.post(url.CATEGORY_LIST, params, config);
  },

  // 获取文章分类数量
  articleCount: (params = {}, config = {}) => {
  return http.post(url.ARTICLE_COUNT, params, config);
},
}
