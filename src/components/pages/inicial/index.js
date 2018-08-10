import React, { Component } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import OpsGasteiButton from 'components/generic/ogButton'
import STYLES from './inicialStyle'

class Inicial extends Component {
  state = { Inicial: [] }
  constructor() {
    super()

    //bindings
    this.criarSalario = this.criarSalario.bind(this)
    this.chamarSalarioService = this.chamarSalarioService.bind(this)
    this.logarUsuario = this.logarUsuario.bind(this)
    this.mensagemLogin = this.mensagemLogin.bind(this)
    this.pegarUsuarioGoogle = this.pegarUsuarioGoogle.bind(this)

    this.init()
  }

  criarSalario(valor) {
    this.salario = { valor: valor, data: new Date() }
    // this.logarUsuario(this.pegarUsuarioGoogle(), this.chamarSalarioService, _authService.logout)
    // _$localStorage.salario = this.salario
  }

  chamarSalarioService() {
    // _salarioService
    //   .criar(this.salario)
    //   .then(() => {
    //     delete _$localStorage.usuarioGoogle
    //     this.mensagemLogin(sucesso)
    //     _$location.path('/tutorial')
    //   })
  }

  logarUsuario() {
    // _authService.logarUsuario(usuario)
    //   .then((response) => _authService.loginSucesso(response))
    //   .then(() => funcaoSucesso(true), () => funcaoErro(false))
  }

  mensagemLogin() {
    // return sucesso ? _swalService.success('Bem vindo.') : _swalService.error('Houve algum erro com o login, por favor tente novamente!')
  }

  pegarUsuarioGoogle() {
    // return angular.copy(_$localStorage.usuarioGoogle)
  }

  init() {
    // const usuario = this.pegarUsuarioGoogle()
    // verifica se o usuario possui algum registro de salario
    // _salarioService
    //   .quantidadePorUsuario(usuario.id)
    //   .then(response => {
    //     if (response.data > 0) {
    //       // loga o usuario e redireciona para a tela de objetivos
    //       this.logarUsuario(usuario, this.mensagemLogin, this.mensagemLogin)
    //       delete _$localStorage.usuarioGoogle
    //     }
    //   })
  }


  atualizarSalarioEState(valor) {
    this.setState({ salario: valor })
  }

  render() {
    return (
      <ScrollView style={STYLES.pageContainer} contentContainerStyle={STYLES.container}>
        <View style={STYLES.inicialContainer}>
          <Text style={STYLES.pageTitle}> Bem vindo ao Ops... Gastei! </Text>
          <Text style={STYLES.pageTitle}> Vamos começar? </Text>
          <Text style={STYLES.label}> Qual seu salário? </Text>

          <TextInputMask
            value={this.state.salario}
            refInput={valor => this.valorSalario = valor}
            type={'money'}
            style={STYLES.input}
            placeholder="R$ 1.800,75"
            onChangeText={valor => this.atualizarSalarioEState(valor)}
          />

        </View>

        <View style={STYLES.button}>
          <OpsGasteiButton style={STYLES.button} label="Continuar" model={this.salario} onClick={this.criarSalario} />
        </View>
      </ScrollView>
    )
  }
}

export default Inicial
