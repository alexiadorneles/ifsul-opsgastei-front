/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

// import OpsGasteiBox from './src/components/generic/ogBox'
// import OpsGasteiButton from './src/components/generic/ogButton'
// import OpsGasteiCategoria from './src/components/generic/ogCategoria'
// import OpsGasteiGastoFixo from './src/components/generic/ogGastoFixo'
import OpsGasteiLogo from 'components/generic/ogLogo'


// type Props = {};
// const categoria = { nome: 'COMIDA' }
// const gastoFixo = {
//   nome: 'Almoço',
//   opcoes: true,
//   valor: 10,
//   duracaoMeses: 2,
//   categoria,
// }
export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // <OpsGasteiBox ogTitle="Ops Gastei">
      //   <OpsGasteiButton
      //     label="Confirmar"
      //     width={80}
      //     onClick={() => true}
      //   />
      // </OpsGasteiBox>

      // <OpsGasteiBox ogTitle="Categoria e Gasto Fixo">
      //   <OpsGasteiCategoria categoria={categoria}/>
      //   <OpsGasteiGastoFixo gastoFixo={gastoFixo}/>
      // </OpsGasteiBox>

      <OpsGasteiLogo></OpsGasteiLogo>


      // </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
