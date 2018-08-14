import React, { Component } from 'react'
import { View } from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux'

import Categorias from 'components/pages/categorias'
import Objetivos from 'components/pages/objetivos'
import AdicionarObjetivo from 'components/pages/adicionarObjetivo'
import Estatistica from 'components/pages/estatistica'
import GastosFixos from 'components/pages/gastosFixos'
import Perfil from 'components/pages/perfil'
import { OpsGasteiNavbar, OpsGasteiMenubar } from 'components/generic'

export default class App extends Component {
  componentDidMount() {
    Actions.objetivos()
  }

  render() {
    return (
      <View>
        <OpsGasteiNavbar title="Agosto" />
        <Router>
          <Scene key="root">
            <Scene key="objetivos"
              component={Objetivos}
            />
            <Scene
              key="categorias"
              initial
              component={Categorias}
            />
            <Scene
              key="adicionarObjetivo"
              component={AdicionarObjetivo}
            />
            <Scene
              key="estatistica"
              component={Estatistica}
            />
            <Scene
              key="gastosFixos"
              component={GastosFixos}
            />
            <Scene
              key="perfil"
              component={Perfil}
            />
          </Scene>
        </Router>
        <OpsGasteiMenubar />
      </View>
    )
  }
}







