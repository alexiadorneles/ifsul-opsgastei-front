import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import OpsGasteiTagCategoria from 'components/generic/ogTagCategoria'
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
        <OpsGasteiTagCategoria
          cor={categoria.cor}
          icone={categoria.icone}
        />
      </View>
    )
  }
}

export default OpsGasteiCategoria
