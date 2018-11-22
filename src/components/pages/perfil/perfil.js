import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'

import { SecuredContainer } from 'components/generic'
import Background from 'assets/img/header.png'
import STYLES from './perfilStyle'

class Perfil extends Component {
  static propTypes = {
    usuario: PropTypes.object,
    salarioAtual: PropTypes.object,
  }

  render() {
    const { usuario, salarioAtual } = this.props
    const lastListItemStyle = { ...STYLES.listItem }
    lastListItemStyle.borderBottomWidth = 0

    return (
      <SecuredContainer style={STYLES.container}>
        <ImageBackground style={STYLES.headerProfile} source={Background}>
          <Image style={STYLES.picture} source={usuario && usuario.picture} />
          <Text style={STYLES.nome}> {usuario && usuario.nome} </Text>
          <Text style={STYLES.cash}> {salarioAtual && salarioAtual.valor} </Text>
        </ImageBackground>

        <View style={STYLES.list}>
          <TouchableOpacity onPress={this.editarReceita}>
            <Text style={STYLES.listItem}> Editar Receitas </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToCategorias}>
            <Text style={STYLES.listItem}> Categorias </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goToTutorial}>
            <Text style={STYLES.listItem}> Rever Tutorial </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.logout}>
            <Text style={lastListItemStyle}> Sair </Text>
          </TouchableOpacity>
        </View>
      </SecuredContainer>
    )
  }
}

export { Perfil }
