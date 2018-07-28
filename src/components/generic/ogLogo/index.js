import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Logo from '../../../assets/img/logo.png'
import { imageSize } from './ogLogoStyle'


class OpsGasteiLogo extends Component {
  state = { gastoFixo: {} }

  render() {
    return (
      <View style={imageSize}>
        <Image style={imageSize} source={Logo} />
      </View>
    )
  }

}

export default OpsGasteiLogo
