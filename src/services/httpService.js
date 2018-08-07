import axios from 'axios'
import URL_BASE from '../constants/baseUrl'

class HttpService {
  get(url) {
    return axios.get(`${URL_BASE}/${url}`)
  }

  post(url, prop) {
    return axios.post(`${URL_BASE}/${url}`, prop)
  }

  put(url, prop) {
    return axios.put(url, prop)
  }

  deletar(url) {
    return axios.delete(`${URL_BASE}/${url}`)
  }
}

export default HttpService
