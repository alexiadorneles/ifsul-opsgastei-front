import { httpService } from './services'
const url = 'salarios'

class SalarioService {
  criar(salario) {
    return httpService.post(url, salario)
  }

  atualizar(salario) {
    return httpService.post(url, salario)
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

  quantidadePorUsuario(idUsuario) {
    return httpService.get(`${url}/count/${idUsuario}`)
  }

  buscarPorUsuarioEData(ano, mes) {
    return httpService.get(`${url}/usuario/${ano}/${mes}`)
  }

  atualizarSalario(valor) {
    return httpService.post(`${url}/atualizar-salario`, valor)
  }

  buscarAtual() {
    return httpService.get(`${url}/usuario/atual`)
  }
}

const salarioService = new SalarioService()
export { salarioService }
