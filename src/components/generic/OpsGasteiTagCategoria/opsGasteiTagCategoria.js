import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { OpsGasteiIcone } from 'components/generic'
import STYLES from './opsGasteiTagCategoriaStyle'
import COLORS from 'constants/colors'

class OpsGasteiTagCategoria extends Component {
  static propTypes = {
    cor: PropTypes.string,
    icone: PropTypes.string,
  }

  render() {
    const { cor, icone } = this.props
    const categoriaStyle = {
      ...STYLES.tag,
      backgroundColor: cor,
    }
    return (
      <View style={STYLES.container}>
        <View style={categoriaStyle} >
          <OpsGasteiIcone icone={icone} cor={COLORS.text} />
        </View>
      </View>
    )
  }
}

export default OpsGasteiTagCategoria
