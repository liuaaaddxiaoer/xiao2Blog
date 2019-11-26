import http from './index'

import * as url from './url'

export default {

  // 获取文章列表
  articleList: (params = {}, config = {}) => {
    return http.post(url.ARTICLE_LIST, params, config);
  }
}
