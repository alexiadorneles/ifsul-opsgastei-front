import React, { Component } from 'react'
import { Image, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

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
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
      accountName: 'OpsAndroid', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      androidClientId: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    })

    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      console.log(userInfo)

      // this.setState({ userInfo })
    } catch (error) {
      console.log(error)

      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (f.e. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
    // this.loadGoogleApi()
    // const manager = new OAuthManager('ops')
    // await manager.configure({
    //   google: {
    //     // callback_url: 'io.fullstack.FirestackExample:/oauth2redirect',
    //     client_id: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com',
    //     // client_secret: 'YOUR_SECRET',
    //   },
    // })
    // await manager.configure('google', {
    //   // callback_url: 'io.fullstack.FirestackExample:/oauth2redirect',
    //   client_id: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com',
    //   client_secret: '898821703398-jh61ekkqvolftqn7fpvomrkki7du6iot.apps.googleusercontent.com',
    // })
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
