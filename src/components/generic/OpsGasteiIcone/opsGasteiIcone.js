import React, { Component } from 'react'
import { Text } from 'react-native'
import { Icons } from 'react-native-fontawesome'
import PropTypes from 'prop-types'

import STYLES from './opsGasteiIconeStyle'

class OpsGasteiIcone extends Component {
	static propTypes = {
		icone: PropTypes.string,
		cor: PropTypes.string,
		fontSize: PropTypes.number,
	}

	render() {
		if (!this.props.icone) return null

		const iconeStyle = { ...STYLES.icone }
		iconeStyle.color = this.props.cor
		iconeStyle.fontSize = this.props.fontSize || iconeStyle.fontSize
		return <Text style={iconeStyle}>{Icons[this.props.icone]}</Text>
	}
}

export default OpsGasteiIcone
