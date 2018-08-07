import React, { Component } from 'react'
import { Text, View, TextInput, Picker } from 'react-native'
import MaskedInput from 'react-native-masked-input'
import PropTypes from 'prop-types'

import OpsGasteiButton from 'components/generic/ogButton'
import STYLES from './adicionarObjetivoStyle'

class AdicionarObjetivo extends Component {
  static propTypes = {
    usuario: PropTypes.object,
    salarioAtual: PropTypes.object,
  }

  constructor() {
    super()

    //bindings
    this.adicionar = this.adicionar.bind(this)
    this.objetivoAdicionado = this.objetivoAdicionado.bind(this)
    this.buscarCategorias = this.buscarCategorias.bind(this)
  }

  objetivoAdicionado() {
    // _swalService.success(`'${nomeObjetivo}' adicionado com sucesso.`)
  }

  adicionar(objetivo) {
    const data = new Date()
    objetivo.status = 'I'
    objetivo.data = data
    // _objetivoService.criar(objetivo).then( () => {
    //   this.objetivoAdicionado(objetivo.nome)
    //   _$location.url('/objetivo')
    // })
  }

  buscarCategorias() {
    // _categoriaService.buscarPorUsuario().then(res => this.categorias = res.data)
    return [{ label: 'Comida' }]
  }

  renderPickerItems() {
    const { categorias } = this.buscarCategorias()
    return categorias.map(cat => <Picker.Item key={cat.nome} label={cat.nome} value={cat} />)
  }

  render() {
    return (
      <View style={STYLES.container}>
        <View style={STYLES.adicionarObjetivoContainer}>
          <Text style={STYLES.title}> NOVO OBJETIVO </Text>
          <TextInput
            style={STYLES.input}
            placeholder="Nome"
            onChangeText={(nomeObjetivo) => this.setState({ nomeObjetivo })}
          />
          <MaskedInput
            style={STYLES.input}
            placeholder="Valor"
            maskType="money"
            currencySymbol="R$"
            currencySeparator=","
          />
          <Picker
            selectedValue={this.state.objetivo.categoria}
            style={STYLES.input}
            onValueChange={(categoria) => this.setState({ categoria })}
          >
            {this.renderPickerItems()}
          </Picker>

          <OpsGasteiButton
            label="Adicionar Objetivo"
            model={this.state.objetivo}
            onClick={this.adicionar}
          />
        </View>
      </View>
    )
  }
}

export default AdicionarObjetivo
