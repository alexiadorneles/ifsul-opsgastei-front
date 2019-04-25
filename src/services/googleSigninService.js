import { GoogleSignin, statusCodes } from 'react-native-google-signin'

const errors = [
  {
    key: statusCodes.SIGN_IN_CANCELLED,
    message: 'SIGIN CANCELLED',
  },
  {
    key: statusCodes.IN_PROGRESS,
    message: 'IN_PROGRESS',
  },
  {
    key: statusCodes.PLAY_SERVICES_NOT_AVAILABLE,
    message: 'PLAY SERVICES NOT AVAILABLE',
  },
]

class GoogleSigninService {
  async signIn() {
    await GoogleSignin.hasPlayServices()
    try {
      const { user } = await GoogleSignin.signIn()
      return user
    } catch (error) {
      console.warn(errors.find(er => er.key === error.code).message)
    }
  }

  async signInSilently() {
    const { user } = GoogleSignin.signInSilently()
    return user
  }

  async getCurrentUser() {
    return await GoogleSignin.getCurrentUser()
  }


  async isSignedIn() {
    return await GoogleSignin.isSignedIn()
  }

  async signOut() {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
  }

  async configure() {
    await GoogleSignin.configure()
  }

}

const googleSiginService = new GoogleSigninService()
export { googleSiginService }
