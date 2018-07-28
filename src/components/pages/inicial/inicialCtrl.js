import angular from 'angular'

let _$location
let _$localStorage
let _salarioService
let _authService
let _swalService

export default class InicialController {
  constructor($location, $localStorage, salarioService, authService, swalService) {
    _$location = $location
    _$localStorage = $localStorage
    _salarioService = salarioService
    _authService = authService
    _swalService = swalService

    // init
    this.init()
  }

  criarSalario(valor) {
    this.salario = {valor: valor, data: new Date()},
    this.logarUsuario(this.pegarUsuarioGoogle(), this.chamarSalarioService, _authService.logout)
    _$localStorage.salario = this.salario
  }

  chamarSalarioService(sucesso) {
    _salarioService
      .criar(this.salario)
      .then(() => {
        delete _$localStorage.usuarioGoogle
        this.mensagemLogin(sucesso)
        _$location.path('/tutorial')
      })
  }

  logarUsuario (usuario, funcaoSucesso, funcaoErro) {
    _authService.logarUsuario(usuario)
      .then((response) => _authService.loginSucesso(response))
      .then(() => funcaoSucesso(true), () => funcaoErro(false))
  }

  mensagemLogin(sucesso) {
    return sucesso ? _swalService.success('Bem vindo.') : _swalService.error('Houve algum erro com o login, por favor tente novamente!')
  }

  pegarUsuarioGoogle() {
    return angular.copy(_$localStorage.usuarioGoogle)
  }

  init() {
    const usuario = this.pegarUsuarioGoogle()
    // verifica se o usuario possui algum registro de salario
    _salarioService
      .quantidadePorUsuario(usuario.id)
      .then(response => {
        if (response.data > 0) {
          // loga o usuario e redireciona para a tela de objetivos
          this.logarUsuario(usuario, this.mensagemLogin, this.mensagemLogin)
          delete _$localStorage.usuarioGoogle
        }
      })
  }
}
