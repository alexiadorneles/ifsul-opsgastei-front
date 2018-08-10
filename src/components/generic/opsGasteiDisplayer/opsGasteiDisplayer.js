import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MaskService } from 'react-native-masked-text'
import PropTypes from 'prop-types'

import OpsGasteiCategoria from 'components/generic/ogCategoria'
import STYLES from './opsGasteiDisplayerStyle'

const PRIVATE_PROPERTIES = ['categoria', 'valor', 'status', 'nome', 'opcoes']

class OpsGasteiDisplayer extends Component {
  static propTypes = {
    object: PropTypes.object,
    children: PropTypes.Component,
  }

  renderProps(object) {
    return Object.keys(object)
      .filter(k => !PRIVATE_PROPERTIES.includes(k))
      .map(k => <Text style={STYLES.type} key={k}>{k.replace(/\b\w/g, l => l.toUpperCase())}: {object[k]} </Text>)
  }

  renderValor(object) {
    const valor = MaskService.toMask('money', object.valor || 0, {
      unit: 'R$',
      separator: '.',
      delimiter: ',',
    })

    return <Text style={STYLES.type}>Valor: {valor} </Text>
  }

  renderCategoria(object) {
    return (
      <View style={STYLES.categoria}>
        <OpsGasteiCategoria style={STYLES.categoriaComnponent} categoria={object.categoria} />
      </View>
    )
  }

  render() {
    const { object, children } = this.props
    return (
      <View style={STYLES.displayerContainer}>
        <View style={STYLES.displayerTitle}>
          <Text style={STYLES.texto}> {object.nome} </Text>
          {children}
        </View>

        <View style={STYLES.info}>
          {this.renderValor(object)}
          {this.renderProps(object)}
          {this.renderCategoria(object)}
        </View>
      </View >
    )
  }
}

export default OpsGasteiDisplayer
