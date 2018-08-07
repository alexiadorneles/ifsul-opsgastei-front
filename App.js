/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import OpsGasteiBox from './src/components/generic/ogBox'
// import OpsGasteiButton from './src/components/generic/ogButton'
// import OpsGasteiCategoria from './src/components/generic/ogCategoria'
// import OpsGasteiGastoFixo from './src/components/generic/ogGastoFixo'
// import OpsGasteiLogo from 'components/generic/ogLogo'
import OpsGasteiMenuBar from 'components/generic/ogMenubar'
import OpsGasteiObjetivoIncompleto from 'components/generic/ogObjetivoIncompleto'
import OpsGasteiNavbar from 'components/generic/ogNavbar'
import OpsGasteiSaldo from 'components/generic/ogSaldo'
import OpsGasteiTotalizador from 'components/generic/ogTotalizador'


// type Props = {};
const categoria = { nome: 'Comida', cor: 'red', icone: 'cutlery' }
// const gastoFixo = {
//   nome: 'Almoço',
//   opcoes: true,
//   valor: 10,
//   duracaoMeses: 2,
//   categoria,
// }

const objetivo = {
  nome: 'Xis',
  valor: 15,
  categoria,
}

const objetivos = []

for (let i=0; i < 10; i++) {
  objetivos.push({ valor: i * 10 })
}

export default class App extends Component {
  teste() {

  }

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

      <View style={styles.container}>
        <OpsGasteiNavbar title="julho" />
        <ScrollView>
          <OpsGasteiSaldo />
          <OpsGasteiBox title="Objetivos Incompletos">
            <OpsGasteiObjetivoIncompleto objetivo={objetivo} callbackAcao={this.teste} />
            <OpsGasteiTotalizador objetivos={objetivos} />
          </OpsGasteiBox>
        </ScrollView>
        <OpsGasteiMenuBar />
      </View>


      // </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 50,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'stretch',
    // backgroundColor: '#F5FCFF',
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
