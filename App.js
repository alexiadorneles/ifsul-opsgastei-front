import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import {
	Objetivos,
	Categorias,
	AdicionarObjetivo,
	Estatistica,
	GastosFixos,
	Perfil,
	Login,
	Inicial,
} from 'components/pages'
import {
	LOGIN,
	OBJETIVOS,
	CATEGORIAS,
	ADICIONAR_OBJETIVO,
	ESTATISTICA,
	GASTOS_FIXOS,
	PERFIL,
	INICIAL,
} from 'constants/routerKeys'

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView contentContainerStyle={{ flex: 1 }}>
					<Router>
						<Scene key="root" style={{ flex: 1 }}>
							<Scene key={INICIAL} component={Inicial} hideNavBar={true} /*initial*/ />
							<Scene
								key={LOGIN}
								component={Login}
								hideNavBar={true}
								// initial
							/>
							<Scene key={OBJETIVOS} component={Objetivos} hideNavBar={true} initial />
							<Scene key={CATEGORIAS} component={Categorias} hideNavBar={true} />
							<Scene key={ADICIONAR_OBJETIVO} component={AdicionarObjetivo} hideNavBar={true} />
							<Scene key={ESTATISTICA} component={Estatistica} hideNavBar={true} />
							<Scene key={GASTOS_FIXOS} component={GastosFixos} hideNavBar={true} />
							<Scene key={PERFIL} component={Perfil} hideNavBar={true} />
						</Scene>
					</Router>
				</ScrollView>
			</View>
		)
	}
}
