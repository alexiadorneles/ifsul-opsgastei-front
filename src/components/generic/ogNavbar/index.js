import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import NavImage from 'assets/img/nav.png'
import STYLES from './ogNavbarStyle'


class OpsGasteiNavbar extends Component {
  getNomeMes() {
    // return this.mes
    // ? `${moment(this.mes).locale('pt-br').format('MMMM')} / ${moment(this.mes).year()}`
    // : moment().locale('pt-br').format('MMMM')
  }

  render() {
    console.log('rendering')
    return (
      <View style={STYLES.appNavbar}>
        <View style={STYLES.appNavbarContainer}>
          <Image style={STYLES.imageNavbar} source={NavImage} />
          <Text style={STYLES.texto}> {this.props.title.toUpperCase()} </Text>
        </View>
      </View>
    )
  }
}

export default OpsGasteiNavbar
