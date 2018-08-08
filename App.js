import React, { Component } from 'react'
// import { KeyboardAvoidingView, ScrollView } from 'react-native'

import OpsGasteiMenuBar from 'components/generic/ogMenubar'
import OpsGasteiNavbar from 'components/generic/ogNavbar'
import Perfil from 'components/pages/perfil'
import AdicionarObjetivo from 'components/pages/adicionarObjetivo'
import Categorias from 'components/pages/categorias'
import Icone from 'assets/img/icone.png'
import { Dimensions,  View } from 'react-native'
import { ColorWheel } from 'react-native-color-wheel';

const usuario = {
  nome: 'Aléxia Dorneles',
  picture: Icone,
}
const salarioAtual = { valor: 1800 }

export default class App extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <ColorWheel
            initialColor="#ee0000"
            onColorChange={color => console.log({color})}
            style={{width: Dimensions.get('window').width}}
            thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
          <ColorWheel
            initialColor="#00ee00"
            style={{ marginLeft: 20, padding: 40, height: 200, width: 200 }} />
        </View>
      // <KeyboardAvoidingView style={{ flex: 1 }}>
      //   <OpsGasteiNavbar title="julho" />
      //   <ScrollView contentContainerStyle={{ flex: 1 }}>
      //     <Categorias />
      //     {/* <AdicionarObjetivo /> */}
      //     {/* <Perfil usuario={usuario} salarioAtual={salarioAtual} /> */}
      //   </ScrollView>
      //   <OpsGasteiMenuBar />
      // </KeyboardAvoidingView>
    )
  }
}
