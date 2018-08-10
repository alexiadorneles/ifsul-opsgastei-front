import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Categorias from 'components/pages/categorias'
import GastosFixos from 'components/pages/gastosFixos'
import Estatistica from 'components/pages/estatistica'
import Inicial from 'components/pages/inicial'
import OpsGasteiNavbar from 'components/generic/ogNavbar'
import OpsGasteiMenuBar from 'components/generic/ogMenubar'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <OpsGasteiNavbar title="julho" />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Inicial />
          {/* <GastosFixos /> */}
          {/* <Estatistica /> */}
          {/* <Categorias /> */}
          {/* <AdicionarObjetivo /> */}
          {/* <Perfil usuario={usuario} salarioAtual={salarioAtual} /> */}
        </ScrollView>
        <OpsGasteiMenuBar />
      </View>
    )
  }
}
