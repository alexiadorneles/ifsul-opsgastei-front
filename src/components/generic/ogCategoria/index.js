import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import STYLES from './ogCategoriaStyle'

class OpsGasteiCategoria extends Component {
  constructor() {
    super()
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
