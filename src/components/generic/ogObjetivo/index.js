import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './ogObjetivoStyle'
import OpsGasteiCategoria from 'components/generic/ogCategoria'
import OpsGasteiDisplayer from '../opsGasteiDisplayer';

class OpsGasteiObjetivo extends Component {
  static propTypes = {
    objetivo: PropTypes.object,
    children: PropTypes.Component,
  }

  render() {
    const { objetivo, children } = this.props

    console.log(children)
    return (
      // <View style={STYLES.objetivoContainer}>
      //   <View style={STYLES.objetivoTitle}>
      //     <Text style={STYLES.texto}> {objetivo.nome} </Text>
      //     {children}
      //   </View>

      //   <View style={STYLES.info}>
      //     <Text style={STYLES.type}>Valor: {objetivo.valor} </Text>
      //     <View style={STYLES.categoria}>
      //       <OpsGasteiCategoria style={STYLES.categoriaComnponent} categoria={objetivo.categoria} />
      //     </View>
      //   </View>
      // </View >
      <OpsGasteiDisplayer object={objetivo}>
        {children}
      </OpsGasteiDisplayer>
    )
  }
}

export default OpsGasteiObjetivo
