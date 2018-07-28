let _usuarioService
let _$rootScope
let _$timeout

export default class OpsGasteiSaldo {
  constructor(usuarioService, $rootScope, $timeout) {
    _usuarioService = usuarioService
    _$rootScope = $rootScope
    _$timeout = $timeout

    $timeout(() => {
      this.pegarSaldo()
    })
  }

  pegarSaldo() {
    if (!!this.periodo) {
      this.pegarSaldoPorData()
    } else {
      this.pegarSaldoAtual()
      _$rootScope.$on('atualizarSaldo', () => { this.pegarSaldo() })
    }
  }

  pegarSaldoAtual() {
    _usuarioService.pegarSaldo().then(response => {
      this.valorSaldo = response.data
      this.valorSaldoExibicao = Math.abs(this.valorSaldo)
    })
  }

  pegarSaldoPorData() {
    _usuarioService.pegarSaldoPorData(this.periodo).then(response => {
      this.valorSaldo = response.data
      this.valorSaldoExibicao = Math.abs(this.valorSaldo)
    })
  }

  getSalario() {
    _$timeout(() => this.salario).then(salario => salario)
    return this.salario
  }

}
