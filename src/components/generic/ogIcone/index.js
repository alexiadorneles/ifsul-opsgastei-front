import React, { Component } from 'react'
import { Text } from 'react-native'
import STYLES from './ogIconeStyle'

class OpsGasteiIcone extends Component {
  render() {
    return (
      <Text style={STYLES.icone}>{this.props.icone}</Text>
    )
  }
}

export default OpsGasteiIcone
