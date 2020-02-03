import { httpService } from 'services'
const url = '/usuarios'

class UsuarioService {
	criar(usuario) {
		return httpService.post(url, usuario)
	}

	findAll() {
		return httpService.get(url)
	}

	pegarSaldo() {
		return httpService.get(`${url}/saldo-atual`)
	}

	pegarSaldoPorData(periodo) {
		return httpService.get(`${url}/saldo/${periodo.ano}/${periodo.mes}`)
	}
}

const usuarioService = new UsuarioService()
export { usuarioService }
