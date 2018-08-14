import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import { OpsGasteiCategoria } from 'components/generic'
import STYLES from './opsGasteiLegendaGraficoStyle'

class OpsGasteiLegendaGrafico extends Component {
  static propTypes = {
    categorias: PropTypes.array,
  }

  renderCategorias() {
    const { categorias } = this.props
    return categorias.map(categoria => <OpsGasteiCategoria key={categoria.nome} categoria={categoria} />)
  }

  render() {
    return (
      <View style={STYLES.container}>
        <Text style={STYLES.description}>Legenda</Text>
        {this.renderCategorias()}
      </View>
    )
  }
}

export default OpsGasteiLegendaGrafico
