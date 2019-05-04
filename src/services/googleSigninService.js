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
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    try {
      const { user } = await GoogleSignin.signIn()
      return user
    } catch (error) {
      const knownError = errors.find(er => er.key === error.code)
      console.warn(knownError && knownError.message || error)
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
    // await GoogleSignin.configure({
    // webClientId: '737716793798-hbgfjj3unt8oralqj5sscuqabt4g4uoa.apps.googleusercontent.com',
    // client ID of type WEB for your server (needed to verify user ID and offline access)
    // })
  }

}

const googleSiginService = new GoogleSigninService()
export { googleSiginService }
