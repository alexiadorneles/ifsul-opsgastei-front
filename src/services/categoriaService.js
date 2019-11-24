import { httpService } from 'services'
const url = 'categorias'

class CategoriaService {
	criar(categoria) {
		return httpService.post(url, categoria)
	}

	atualizar(categoria) {
		return httpService.post(url, categoria)
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
}

const categoriaService = new CategoriaService()
export { categoriaService }
