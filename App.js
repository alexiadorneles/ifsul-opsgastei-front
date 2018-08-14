import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import LoggedContainer from 'components/pages/loggedContainer'
import Login from 'components/pages/login'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Router>
            <Scene key="root">
              <Scene key="login"
                component={Login}
                hideNavBar={true}
                initial
              />
              <Scene
                key="loggedContainer"
                hideNavBar={true}
                component={LoggedContainer}
              />
            </Scene>
          </Router>
        </ScrollView>
      </View>
    )
  }
}
