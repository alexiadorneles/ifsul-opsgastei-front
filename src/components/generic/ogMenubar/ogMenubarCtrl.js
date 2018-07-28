let _$location
let _swalService
let _$window

export default class OpsGasteiMenubar {
  constructor($location, swalService, $window) {
    _$location = $location
    _$window = $window
    _swalService = swalService

    this.carregarMes = this.carregarMes.bind(this)
  }

  buscarMes() {
    const title = 'Buscar Meses'
    const text = 'Selecione o mês que deseja visualizar:'
    const inputOptions = {
      type:	'month',
    }
    _swalService.input({ title, text, inputOptions }, this.carregarMes)
  }

  carregarMes(dataParam) {
    const url = 'http://localhost:9000'
    const [ano, mes] = dataParam.split('-')
    _$window.location.href = `${url}/outro-mes/${ano}/${mes}`
  }


  verificarAtivo(urlEsperado) {
    return _$location.$$absUrl.endsWith(urlEsperado)
  }
}
