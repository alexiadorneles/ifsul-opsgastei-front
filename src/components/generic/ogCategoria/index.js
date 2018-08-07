import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './ogCategoriaStyle'

class OpsGasteiCategoria extends Component {
  static propTypes = {
    categoria: PropTypes.object,
  }

  render() {
    const { categoria } = this.props
    return (
      <View style={STYLES.categoriaContainer}>
        <Text style={STYLES.nomeContainer}>{categoria.nome}</Text>
      </View>
      // <OpsGasteiTagCategoria
      //   cor={this.categoria.cor}
      //   icone={this.categoria.icone}
      // ></OpsGasteiTagCategoria>
    )
  }
}

export default OpsGasteiCategoria
