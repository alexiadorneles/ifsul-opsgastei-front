import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import { Objetivos, Categorias, AdicionarObjetivo, Estatistica, GastosFixos, Perfil, Login } from 'components/pages'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Router>
            <Scene key="root" style={{ flex: 1 }}>
              <Scene key="login"
                component={Login}
                hideNavBar={true}
                initial
              />
              <Scene
                key="objetivos"
                component={Objetivos}
                hideNavBar={true}
              />
              <Scene
                key="categorias"
                component={Categorias}
                hideNavBar={true}
              />
              <Scene
                key="adicionarObjetivo"
                component={AdicionarObjetivo}
                hideNavBar={true}
              />
              <Scene
                key="estatistica"
                component={Estatistica}
                hideNavBar={true}
              />
              <Scene
                key="gastosFixos"
                component={GastosFixos}
                hideNavBar={true}
              />
              <Scene
                key="perfil"
                component={Perfil}
                hideNavBar={true}
              />
            </Scene>
          </Router>
        </ScrollView>
      </View>
    )
  }
}
