import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './ogButtonStyle'

class OpsGasteiButton extends Component {
  static propTypes = {
    width: PropTypes.number,
    onClick: PropTypes.function,
    label: PropTypes.string,
    model: PropTypes.object,
    if: PropTypes.boolean || PropTypes.function,
  }

  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    const { onClick, model } = this.props
    onClick(model)
  }

  deveRenderizarComponente() {
    const condicao = this.props.if
    if (condicao === undefined) return true
    if (typeof condicao === 'function') return condicao()
    return condicao
  }

  render() {
    if (!this.deveRenderizarComponente()) return null
    STYLES.botao.width = this.props.width
    return (
      <View style={STYLES.buttonContainer}>
        <TouchableOpacity
          style={STYLES.botao}
          onPress={this.onClick}
        >
          <Text style={STYLES.texto}>{this.props.label.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default OpsGasteiButton
