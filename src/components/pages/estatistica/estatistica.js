import React, { Component } from 'react'
import { Text, View } from 'react-native'
import _ from 'lodash'

import { OpsGasteiGrafico, OpsGasteiLegendaGrafico, SecuredContainer } from 'components/generic'
import STATUS from 'constants/objetivoStatus'
import STYLES from './estatisticaStyle'

class Estatistica extends Component {
	constructor() {
		super()

		//bindings
		this.buscarObjetivos = this.buscarObjetivos.bind(this)
		this.buscarGastosFixos = this.buscarGastosFixos.bind(this)

		//init
		this.categorias = []
		this.buscarObjetivos()
		this.buscarGastosFixos()
	}

	buscarObjetivos() {
		const response = {
			data: [
				{
					nome: 'Xis',
					valor: 15,
					status: STATUS.COMPLETO,
					categoria: {
						nome: 'Comida',
						cor: 'red',
					},
				},
				{
					nome: 'Violão',
					valor: 250,
					status: STATUS.COMPLETO,
					categoria: {
						nome: 'Música',
						cor: 'blue',
					},
				},
				{
					nome: 'Game of Thrones',
					valor: 120,
					status: STATUS.COMPLETO,
					categoria: {
						nome: 'Entretenimento',
						cor: 'green',
					},
				},
			],
		}
		// _objetivoService.buscarPorUsuario().then(response => {
		const completos = response.data.filter(obj => obj.status === STATUS.COMPLETO)
		const agrupados = _.groupBy(completos, 'categoria.nome')
		this.categorias = completos.map(obj => obj.categoria)
		this.colorsObjetivos = completos.map(obj => obj.categoria.cor)

		this.seriesObjetivos = Object.values(agrupados).map(arr => arr.map(obj => obj.valor).reduce((a, b) => a + b, 0))
		this.labels = []
		Object.keys(agrupados).forEach(nomeCat => {
			this.labels.push(nomeCat)
		})
		// })
	}

	buscarGastosFixos() {
		const response = {
			data: [
				{
					nome: 'Almoço',
					valor: 200,
					status: STATUS.COMPLETO,
					categoria: {
						nome: 'Comida',
						cor: 'red',
					},
				},
				{
					nome: 'Spotify',
					valor: 25,
					status: STATUS.COMPLETO,
					categoria: {
						nome: 'Música',
						cor: 'blue',
					},
				},
				{
					nome: 'Netflix',
					valor: 50,
					status: STATUS.COMPLETO,
					categoria: {
						nome: 'Entretenimento',
						cor: 'green',
					},
				},
			],
		}
		// _gastoFixoService.buscarPorUsuario().then(response => {
		const gastos = response.data
		const agrupados = _.groupBy(gastos, 'categoria.nome')
		gastos.forEach(gasto => {
			this.categorias.push(gasto.categoria)
		})
		this.colorsGastos = gastos.map(gasto => gasto.categoria.cor)
		this.seriesGastos = this.data
		this.seriesGastos = Object.values(agrupados).map(arr => arr.map(obj => obj.valor).reduce((a, b) => a + b, 0))
		this.nomes = []
		Object.keys(agrupados).forEach(nomeCat => {
			this.nomes.push(nomeCat)
		})
		this.categorias = _.uniqBy(this.categorias, 'nome')
		// })
	}

	render() {
		return (
			<SecuredContainer style={STYLES.pageContainer}>
				<Text style={STYLES.pageTitle}> ESTATÍSTICAS </Text>
				<View style={STYLES.graficoContainer}>
					<OpsGasteiGrafico title="Objetivos Completos" series={this.seriesObjetivos} colors={this.colorsObjetivos} />
				</View>
				<View style={STYLES.graficoContainer}>
					<OpsGasteiGrafico title="Gastos Fixos" series={this.seriesGastos} colors={this.colorsGastos} />
				</View>
				<OpsGasteiLegendaGrafico categorias={this.categorias} />
			</SecuredContainer>
		)
	}
}

export { Estatistica }
