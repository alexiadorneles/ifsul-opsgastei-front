import { httpService } from 'services'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { LOGIN } from 'constants/routerKeys'
import URL_BASE from 'constants/baseUrl'

const LOGIN_URL = `${URL_BASE}/authenticated-user`

export default class AuthService {
  async login(usuario) {
    const header = this._montarHeader(usuario)['Authorization']
    await AsyncStorage.setItem('headerAuth', header)
    httpService.setHeader(header)

    return httpService.get(LOGIN_URL)
  }

  async logout() {
    await AsyncStorage.setItem('headerAuth', undefined)
    await AsyncStorage.setItem('usuarioGoogle', undefined)
    httpService.setHeader(undefined)
    Actions[LOGIN]()
  }

  async isAuthenticated() {
    return await AsyncStorage.setItem('usuarioLogado')
  }

  _montarHeader(usuario) {
    const hash = window.btoa(`${usuario.email}:${usuario.senha}`)
    return {
      'Authorization': `Basic ${hash}`,
    }
  }
}
