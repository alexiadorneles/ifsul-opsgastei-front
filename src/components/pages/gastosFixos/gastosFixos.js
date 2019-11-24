import React, { Component } from 'react'
import { Text } from 'react-native'

import { OpsGasteiGastoFixo, SecuredContainer } from 'components/generic'
import AdicionarGastoFixo from './adicionarGastoFixo'
import STYLES from './gastosFixosStyle'

class GastosFixos extends Component {
	state = { gastosFixos: [] }
	constructor() {
		super()

		//bindings
		this.buscarGastosFixos = this.buscarGastosFixos.bind(this)
	}

	componentDidMount() {
		this.buscarCategorias()
		this.buscarGastosFixos()
	}

	buscarCategorias() {
		const response = {
			data: [
				{
					nome: 'Comida',
					cor: 'red',
				},
				{
					nome: 'Música',
					cor: 'blue',
				},
				{
					nome: 'Entretenimento',
					cor: 'green',
				},
			],
		}
		// _categoriaService.buscarPorUsuario().then(response => {
		const categorias = response.data
		this.setState({ categorias })
		// })
	}

	buscarGastosFixos() {
		const response = {
			data: [
				{
					nome: 'Almoço',
					valor: 200,
					categoria: {
						nome: 'Comida',
						cor: 'red',
					},
				},
				{
					nome: 'Spotify',
					valor: 25,
					categoria: {
						nome: 'Música',
						cor: 'blue',
					},
				},
				{
					nome: 'Netflix',
					valor: 50,
					categoria: {
						nome: 'Entretenimento',
						cor: 'green',
					},
				},
			],
		}
		// _gastoFixoService.buscarPorUsuario().then(response => {
		const gastosFixos = response.data
		this.setState({ gastosFixos })
		// })
	}
	renderGastos() {
		const { gastosFixos } = this.state
		return gastosFixos.map(gf => (
			<OpsGasteiGastoFixo key={gf.nome} gastoFixo={gf} callbackExcluir={this.buscarGastosFixos} />
		))
	}

	render() {
		return (
			<SecuredContainer style={STYLES.pageContainer}>
				<Text style={STYLES.pageTitle}> GASTOS FIXOS </Text>
				{this.renderGastos()}

				<AdicionarGastoFixo categorias={this.state.categorias} callbackAdicionar={this.buscarGastosFixos} />
			</SecuredContainer>
		)
	}
}

export { GastosFixos }
