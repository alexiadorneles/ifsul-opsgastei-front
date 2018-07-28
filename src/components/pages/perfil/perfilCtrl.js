let _authService
let _$localStorage
let _swalService
let _salarioService


export default class PerfilCtrl {
  constructor(authService, $localStorage, swalService, salarioService) {

    _authService = authService
    _$localStorage = $localStorage
    _swalService = swalService
    _salarioService = salarioService

    this.atualizarSalario = this.atualizarSalario.bind(this)

    this.init()
  }

  editarReceita() {
    const title = 'Editar Receita'
    const text = 'Digite sua nova receita (somente números): '
    const inputOptions = {
      type:	'number',
      placeholder: 'R$ 500,00',
      step: '0.50',
    }
    _swalService.input({ title, text, inputOptions }, this.atualizarSalario)
  }

  atualizarSalario(valor) {
    _salarioService.atualizarSalario(valor).then(response => {
      this.salarioAtual = response.data
      _$localStorage.salarioAtual = response.data
      _swalService.success()
    })
  }

  init() {
    this.salario = _$localStorage.salario
    this.salarioAtual = _$localStorage.salarioAtual
    this.logout = _authService.logout
    /* eslint-disable */
    this.usuario = {
      nome: localStorage.getItem('nome'),
      picture: localStorage.getItem('picture')
    }
  }

}
