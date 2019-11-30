
import axios from 'axios'
import qs from 'qs'
import {BASE_URL} from './url'

axios.defaults.headers = {
  'content-type':'application/x-www-form-urlencoded',
}

axios.defaults.baseURL = BASE_URL


class Http {

  constructor() {

  }

  get(url, data = {}, config = {}) {
    return axios.get(url, {
      params: data,
      ...config
    })

    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data,
        ...config
      })
        .then(res => resolve(res.data))
        .catch(err => reject(err.message))
    })
  }

  post(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), config)
        .then(res => resolve(res.data))
        .catch(err => reject(err.message))
    })
  }
}



export default new Http()
