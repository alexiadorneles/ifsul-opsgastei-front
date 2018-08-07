import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './ogObjetivoStyle'

class OpsGasteiObjetivo extends Component {
  static propTypes = {
    objetivo: PropTypes.object,
    children: PropTypes.Component,
  }

  render() {
    const { objetivo, children } = this.props

    return (
      < View style={STYLES.objetivoContainer} >
        <View style={STYLES.objetivoTitle}>
          <Text style={STYLES.texto}> {objetivo.nome} </Text>
          {children}
        </View>

        <View style={STYLES.info}>
          <Text style={STYLES.type}>Valor: {objetivo.valor} </Text>
          <View>
            <Text style={STYLES.type}>Categoria:</Text>
            <Text style={STYLES.infoCategoriaNome}>{objetivo.categoria.nome}</Text>
            {/* <OpsGasteiTagCategoria icone={objetivo.categoria.icone} cor={objetivo.categoria.cor} /> */}
          </View>
        </View>
      </View >
    )
  }
}

export default OpsGasteiObjetivo
