import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import NavImage from 'assets/img/nav.png'
import STYLES from './ogNavbarStyle'


class OpsGasteiNavbar extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  getNomeMes() {
    // return this.mes
    // ? `${moment(this.mes).locale('pt-br').format('MMMM')} / ${moment(this.mes).year()}`
    // : moment().locale('pt-br').format('MMMM')
  }

  render() {
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
