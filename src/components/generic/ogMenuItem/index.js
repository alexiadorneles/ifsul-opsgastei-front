import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Icons } from 'react-native-fontawesome'
import PropTypes from 'prop-types'

import OpsGasteiIcone from 'components/generic/ogIcone'
import STYLES from './ogMenuItemStyle'

class OpsGasteiMenuItem extends Component {
  static propTypes = {
    menuItem: PropTypes.object,
  }

  render() {
    const { menuItem } = this.props
    return (
      <TouchableOpacity
        style={menuItem.isAtivo ? STYLES.containerAtivo : STYLES.container}
        onPress={menuItem.onClick}
      >
        <View style={STYLES.iconContainer}>
          <OpsGasteiIcone icone={Icons[menuItem.icone]} />
          <Text style={STYLES.texto}> {menuItem.title} </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default OpsGasteiMenuItem
