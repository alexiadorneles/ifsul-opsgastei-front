import { httpService } from 'services'
const url = 'gastos-fixos'

class GastoFixoService {
	criar(gastoFixo) {
		return httpService.post(url, gastoFixo)
	}

	atualizar(gastoFixo) {
		return httpService.post(url, gastoFixo)
	}

	buscarTodos() {
		return httpService.get(url)
	}

	buscarPorUsuario() {
		return httpService.get(`${url}/usuario`)
	}

	deletar(gastoFixo) {
		return httpService.put(url, gastoFixo)
	}

	editarAgora(gastoFixo) {
		return httpService.put(`${url}/agora`, gastoFixo)
	}

	editarProximos(gastoFixo) {
		return httpService.put(`${url}/proximos`, gastoFixo)
	}

	buscarPorUsuarioEData(ano, mes) {
		return httpService.get(`${url}/usuario/${ano}/${mes}`)
	}
}

const gastoFixoService = new GastoFixoService()
export { gastoFixoService }
