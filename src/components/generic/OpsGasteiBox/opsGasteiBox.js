import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './opsGasteiBoxStyle'

class OpsGasteiBox extends Component {
	state = { showBody: true }
	static propTypes = {
		children: PropTypes.any,
		title: PropTypes.string,
	}

	constructor() {
		super()

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({ showBody: !this.state.showBody })
	}

	renderChildren() {
		if (this.state.showBody) {
			return (
				<View style={STYLES.boxBodyContainer}>
					<View style={STYLES.boxBody}>{this.props.children}</View>
				</View>
			)
		}

		return null
	}

	render() {
		return (
			<View style={STYLES.boxContainer}>
				<View style={STYLES.ogBox}>
					<View style={STYLES.boxHeader}>
						<TouchableNativeFeedback onPress={this.toggle}>
							<Text style={STYLES.textStyle}>{this.props.title.toUpperCase()}</Text>
						</TouchableNativeFeedback>
					</View>

					{this.renderChildren()}
				</View>
			</View>
		)
	}
}

export default OpsGasteiBox
