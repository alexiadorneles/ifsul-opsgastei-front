import React, { Component } from 'react'
import { Image, View, ImageBackground, TouchableOpacity } from 'react-native'

import OpsGasteiLogo from 'components/generic/ogLogo'
import Background from 'assets/img/back.png'
import GoogleIcon from 'assets/img/google-icon.png'
import STYLES from './loginStyle'

class Login extends Component {
  constructor() {
    super()

    //bindings
    this.isNotAuthenticated = this.isNotAuthenticated.bind(this)
    this.redirect = this.redirect.bind(this)
    this.loginGoogle = this.loginGoogle.bind(this)

    // init
    this.redirect()
  }

  isNotAuthenticated() {
    // return !_authService.isAuthenticated()
  }

  redirect() {
    // if (!!_$localStorage.usuarioGoogle)
    //   _$location.path('/inicial')
    // if (_authService.isAuthenticated())
    //   _$location.path('/objetivo')
  }

  loginGoogle() {
    // const auth2 = this.GoogleInit()
    // auth2.signIn().then((response) => {
    //   if (response.Zi) {
    //     localStorage.setItem('picture', response.w3.Paa)
    //     localStorage.setItem('nome', response.w3.ig)
    //     const usuario = { nome: response.w3.ig, email: response.w3.U3, senha: response.w3.Eea }
    //     _usuarioService.criar(usuario).then((response) => {
    //       usuario.id = response.data.id
    //       _$localStorage.usuarioGoogle = usuario
    //       _$window.location.href = 'http://localhost:9000/inicial'
    //     })
    //   }
    // })
  }

  GoogleInit() {
    // var auth2
    // gapi.load('auth2', function () {
    //   auth2 = gapi.auth2.init({
    //     client_id: '634477843209-g930vq5eqfuohn7np4913mhs5jt9a4n8.apps.googleusercontent.com',
    //     fetch_basic_profile: true,
    //     scope: 'profile',
    //   })
    // })
    // return auth2
  }

  render() {
    return (
      <ImageBackground style={STYLES.loginContainer} source={Background}>
        <View style={STYLES.login}>
          <OpsGasteiLogo />
          <TouchableOpacity style={STYLES.botaoLogin} onPress={this.loginGoogle}>
            <Image style={STYLES.googleIcon} source={GoogleIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

export default Login
