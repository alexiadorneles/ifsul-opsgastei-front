import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import URL_BASE from 'constants/baseUrl'

const CONTENT_TYPE = { 'Content-Type': 'application/json' }
const _config = {
	headers: {
		...CONTENT_TYPE,
	},
}

class HttpService {
	async get(url, config) {
		config = config || (await this.getConfig())
		const response = await axios.get(`${URL_BASE}/${url}`, config)
		return response.data
	}

	async post(url, prop, config) {
		config = config || (await this.getConfig())
		const response = await axios.post(`${URL_BASE}/${url}`, prop, config)
		return response.data
	}

	async put(url, prop, config) {
		config = config || (await this.getConfig())
		const response = await axios.put(url, prop, config)
		return response.data
	}

	async deletar(url, config) {
		config = config || (await this.getConfig())
		const response = await axios.delete(`${URL_BASE}/${url}`, config)
		return response.data
	}

	setHeader(header = {}) {
		_config.headers = { ...CONTENT_TYPE, ...header }
	}

	async getConfig() {
		if (!_config.headers.authorization) {
			this.setHeader({
				authorization: await AsyncStorage.getItem('hedaderAuth'),
			})
		}

		return _config
	}
}


const httpService = new HttpService()
export { httpService }
