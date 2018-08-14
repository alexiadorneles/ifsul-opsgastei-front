import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './opsGasteiTotalizadorStyle'

class OpsGasteiTotalizador extends Component {
  static propTypes = {
    objetivos: PropTypes.array,
  }

  getTotal() {
    const { objetivos } = this.props
    return objetivos
      .map(objetivo => objetivo.valor)
      .reduce((a, b) => a + b)
  }


  render() {
    if (!this.props.objetivos.length) return null

    return <Text style={STYLES.objetivosCompletosTotal}> Total: {this.getTotal()} </Text>
  }
}

export default OpsGasteiTotalizador
