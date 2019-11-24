import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { OpsGasteiTagCategoria } from 'components/generic'
import STYLES from './opsGasteiCategoriaStyle'

class OpsGasteiCategoria extends Component {
	static propTypes = {
		categoria: PropTypes.object,
		style: PropTypes.object,
	}

	render() {
		const { categoria, style } = this.props
		const styleContainer = {
			...STYLES.categoriaContainer,
			...style,
		}
		return (
			<View style={styleContainer}>
				<Text style={STYLES.nomeCategoria}>{categoria.nome}</Text>
				<OpsGasteiTagCategoria cor={categoria.cor} icone={categoria.icone} />
			</View>
		)
	}
}

export default OpsGasteiCategoria
