import React, { Component } from 'react'
import { Image, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
import OAuthManager from 'react-native-oauth'

import { OpsGasteiLogo } from 'components/generic'
import Background from 'assets/img/back.png'
import GoogleIcon from 'assets/img/google-icon.png'
import STYLES from './loginStyle'
import { OBJETIVOS, INICIAL } from 'constants/routerKeys'
import { usuarioService } from 'services'

class Login extends Component {
  constructor() {
    super()

    //bindings
    this.redirect = this.redirect.bind(this)
    this.loginGoogle = this.loginGoogle.bind(this)

    // init
    this.redirect()
  }

  async componentDidMount() {

    // this.loadGoogleApi()
    const manager = new OAuthManager('ops')
    await manager.configure({
      google: {
        // callback_url: 'io.fullstack.FirestackExample:/oauth2redirect',
        client_id: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com',
        // client_secret: 'YOUR_SECRET',
      },
    })
    // await manager.configure('google', {
    //   // callback_url: 'io.fullstack.FirestackExample:/oauth2redirect',
    //   client_id: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com',
    //   client_secret: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com',
    // })

    // ...
    console.log(manager)
    const resultado = await manager.authorize('google', { scopes: 'profile email' })
    console.log('cool cool cool cool cool cool cool cool')
  }

  async redirect() {
    const usuarioGoogle = await AsyncStorage.getItem('usuarioGoogle')
    const usuarioLogado = await AsyncStorage.getItem('usuarioLogado')
    if (!!usuarioGoogle) Actions[INICIAL]()
    if (!!usuarioLogado) Actions[OBJETIVOS]()
  }

  async loginGoogle() {
    this.auth2.signIn().then(async (response) => {
      if (response.Zi) {
        await AsyncStorage.setItem('picture', response.w3.Paa)
        await AsyncStorage.setItem('nome', response.w3.ig)
        const usuario = { nome: response.w3.ig, email: response.w3.U3, senha: response.w3.Eea }
        const usuarioResponse = await usuarioService.criar(usuario)
        usuario.id = usuarioResponse.id
        await AsyncStorage.setItem('usuarioGoogle', usuario)
        Actions[INICIAL]()
      }
    })
  }

  googleInit() {
    gapi.load('auth2', function () { //eslint-disable-line
      this.auth2 = gapi.auth2.init({ //eslint-disable-line
        client_id: '634477843209-g930vq5eqfuohn7np4913mhs5jt9a4n8.apps.googleusercontent.com',
        fetch_basic_profile: true,
        scope: 'profile',
      })
    })
  }

  async loadGoogleApi() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com',
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ['profile', 'email'],
      })
      console.log(result)

    } catch (e) {
      console.log('error', e)
    }
  }

  render() {
    return (
      <ImageBackground style={STYLES.loginContainer} source={Background}>
        <View style={STYLES.login}>
          <OpsGasteiLogo />
          {/* <TouchableOpacity style={STYLES.botaoLogin} onPress={this.loginGoogle}> */}
          <TouchableOpacity style={STYLES.botaoLogin} onPress={() => { }}>
            <Image style={STYLES.googleIcon} source={GoogleIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground >
    )
  }
}

export { Login }
