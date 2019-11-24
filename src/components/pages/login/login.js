import React, { Component } from 'react'
import { Image, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
import { OpsGasteiLogo } from 'components/generic'
import Background from 'assets/img/back.png'
import GoogleIcon from 'assets/img/google-icon.png'
import STYLES from './loginStyle'
import { OBJETIVOS, INICIAL } from 'constants/routerKeys'
import { googleSiginService } from 'services'

class Login extends Component {
	constructor() {
		super()

		//bindings
		this.redirect = this.redirect.bind(this)

		// init
		this.state = { isSigninInProgress: false }
		this.redirect()
	}

	async componentDidMount() {
		await googleSiginService.configure()
	}

	signIn = async () => {
		this.setState({ isSigninInProgress: true })
		const user = await googleSiginService.signIn()
		await AsyncStorage.setItem('usuarioGoogle', JSON.stringify(user))
		this.redirect()
	}

	async redirect() {
		const usuarioGoogle = await AsyncStorage.getItem('usuarioGoogle')
		const usuarioLogado = await AsyncStorage.getItem('usuarioLogado')
		if (!!usuarioGoogle) Actions[INICIAL]()
		if (!!usuarioLogado) Actions[OBJETIVOS]()
	}

	render() {
		return (
			<ImageBackground style={STYLES.loginContainer} source={Background}>
				<View style={STYLES.login}>
					<OpsGasteiLogo />
					<TouchableOpacity style={STYLES.botaoLogin} onPress={this.signIn} disabled={this.state.isSigninInProgress}>
						<Image style={STYLES.googleIcon} source={GoogleIcon} />
					</TouchableOpacity>
				</View>
			</ImageBackground>
		)
	}
}

export { Login }
