import { httpService } from 'services'

const url = '/objetivos'

class ObjetivoService {
	criar(objetivo) {
		return httpService.post(url, objetivo)
	}

	atualizar(objetivo) {
		return httpService.post(url, objetivo)
	}

	buscarTodos() {
		return httpService.get(url)
	}

	deletar(id) {
		return httpService.delete(`${url}/${id}`)
	}

	buscarPorUsuario() {
		return httpService.get(`${url}/usuario`)
	}

	buscarPorUsuarioEData(ano, mes) {
		return httpService.get(`${url}/usuario/${ano}/${mes}`)
	}
}

const objetivoService = new ObjetivoService()
export { objetivoService }
