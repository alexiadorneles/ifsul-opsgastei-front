import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { ColorWheel } from 'react-native-color-wheel'
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native'

import OpsGasteiButton from 'components/generic/ogButton'
import STYLES from './adicionarCategoriaStyle'

class AdicionarCategoria extends Component {
  state = { showAdicionar: false, categoria: {} }

  constructor() {
    super()

    // bindings
    this.mostrarAdicionar = this.mostrarAdicionar.bind(this)
    this.adicionar = this.adicionar.bind(this)
  }

  mostrarAdicionar() {
    this.setState({ showAdicionar: true })
  }

  adicionar(categoria) {
    categoria.cor = categoria.cor || '#000000'
    console.log(categoria)
    // _categoriaService.criar(this.categoria).then(() => {
    // this.callbackAdicionar()
    // _swalService.success('Categoria adicionada.')
    // })
  }

  atualizarPropriedadeCategoriaEState(prop, value) {
    const { categoria } = this.state
    categoria[prop] = value
    this.setState({ categoria })
  }

  renderAdicionarCategoria() {
    console.log(this.state)
    if (!this.state.showAdicionar) return null
    return (
      <View style={STYLES.adicionarCategoria}>
        <Text style={STYLES.title}> ADICIONAR CATEGORIA </Text>
        <TextInput
          style={STYLES.input}
          placeholder="Nome"
          value={this.state.categoria.nome}
          onChangeText={text => this.atualizarPropriedadeCategoriaEState('nome', text)}
        />

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
      </View>
    )
  }

  render() {
    return (
      <View style={STYLES.container}>
        {this.renderAdicionarCategoria()}

        <OpsGasteiButton label="Adicionar Categoria" if={!this.state.showAdicionar} onClick={this.mostrarAdicionar} />
        {/* <OpsGasteiButton label="Adicionar Categoria" if={this.state.showAdicionar} onClick={this.adicionar} model={this.state.categoria} /> */}

      </View>
    )
  }
}

export default AdicionarCategoria
