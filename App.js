import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import OpsGasteiMenuBar from 'components/generic/ogMenubar'
import OpsGasteiNavbar from 'components/generic/ogNavbar'
import Perfil from 'components/pages/perfil'
import Icone from 'assets/img/icone.png'

const usuario = {
  nome: 'Aléxia Dorneles',
  picture: Icone,
}
const salarioAtual = { valor: 1800 }

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <OpsGasteiNavbar title="julho" />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Perfil usuario={usuario} salarioAtual={salarioAtual} />
        </ScrollView>
        <OpsGasteiMenuBar />
      </View>
    )
  }
}
