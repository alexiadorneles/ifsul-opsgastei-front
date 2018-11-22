import angular from 'angular'
import URL_BASE from '../constants/baseUrl'

let _$http
const url = `${URL_BASE}/usuarios`

class UsuarioService {
  constructor($http) {
    _$http = $http
  }

  criar(usuario) {
    return _$http.post(url, usuario)
  }

  pegarSaldo() {
    return _$http.get(`${url}/saldo-atual`)
  }

  pegarSaldoPorData(periodo) {
    return _$http.get(`${url}/saldo/${periodo.ano}/${periodo.mes}`)
  }
}

export default angular.module('services.usuarioService', [])
  .service('usuarioService', UsuarioService)
  .name
