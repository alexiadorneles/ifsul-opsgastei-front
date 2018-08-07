import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import STYLES from './ogIconeStyle'

class OpsGasteiIcone extends Component {
  static propTypes = {
    icone: PropTypes.string,
  }

  render() {
    return (
      <Text style={STYLES.icone}>{this.props.icone}</Text>
    )
  }
}

export default OpsGasteiIcone
