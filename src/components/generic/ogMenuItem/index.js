import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import OpsGasteiIcone from 'components/generic/ogIcone'
import STYLES from './ogMenuItemStyle'


class OpsGasteiMenuItem extends Component {
  render() {
    const { menuItem } = this.props
    return (
      <TouchableOpacity
        style={menuItem.isAtivo ? STYLES.containerAtivo : STYLES.container}
        onPress={menuItem.onClick}
      >
        <FontAwesome style={STYLES.iconContainer}>
          <OpsGasteiIcone icone={Icons[menuItem.icone]} />
          <Text style={STYLES.texto}> {menuItem.title} </Text>
        </FontAwesome>
      </TouchableOpacity>
    )
  }
}

export default OpsGasteiMenuItem
