import React, { Component } from 'react'
import { Text, View, TextInput, Picker } from 'react-native'
import MaskedInput from 'react-native-masked-input'
import { Actions } from 'react-native-router-flux'

import { OpsGasteiButton, SecuredContainer } from 'components/generic'
import { OBJETIVOS } from 'constants/routerKeys'
import { objetivoService, categoriaService } from 'services'
import STYLES from './adicionarObjetivoStyle'

class AdicionarObjetivo extends Component {
  state = { objetivo: {} }

  constructor() {
    super()

    //bindings
    this.adicionar = this.adicionar.bind(this)
    this.objetivoAdicionado = this.objetivoAdicionado.bind(this)
    this.buscarCategorias = this.buscarCategorias.bind(this)
    this.atualizarPropriedadeObjetivoEState = this.atualizarPropriedadeObjetivoEState.bind(this)
  }

  objetivoAdicionado() {
    // _swalService.success(`'${nomeObjetivo}' adicionado com sucesso.`)
  }

  async adicionar(objetivo) {
    const data = new Date()
    objetivo.status = 'I'
    objetivo.data = data
    await objetivoService.criar(objetivo)
    Actions[OBJETIVOS]()
  }

  async buscarCategorias() {
    return await categoriaService.buscarPorUsuario()
  }

  atualizarPropriedadeObjetivoEState(prop, value) {
    const { objetivo } = this.state
    objetivo[prop] = value
    this.setState({ objetivo })
  }

  renderPickerItems() {
    const { categoria } = this.state.objetivo
    const categorias = this.buscarCategorias()
    if (categoria) {
      categorias.splice(categorias.indexOf(categoria), 1)
      categorias.unshift(categoria)
    }
    return categorias.map(cat => <Picker.Item key={cat.nome} label={cat.nome} value={cat} />)
  }

  render() {
    return (
      <SecuredContainer style={STYLES.pageContainer}>
        <View style={STYLES.adicionarObjetivoContainer}>
          <Text style={STYLES.pageTitle}> NOVO OBJETIVO </Text>
          <TextInput
            style={STYLES.input}
            placeholder="Nome"
            value={this.state.objetivo.nome}
            onChangeText={text => this.atualizarPropriedadeObjetivoEState('nome', text)}
          />
          <MaskedInput
            style={STYLES.input}
            placeholder="Valor"
            maskType="money"
            currencySymbol="R$"
            currencySeparator=","
            onChangeText={valor => this.atualizarPropriedadeObjetivoEState('valor', valor)}
          />
          <Picker
            selectedValue={this.state.objetivo.categoria}
            style={STYLES.input}
            value={this.state.objetivo.categoria}
            prompt="Escolha a Categoria"
            onValueChange={categoria => this.atualizarPropriedadeObjetivoEState('categoria', categoria)}
          >
            {this.renderPickerItems()}
          </Picker>

          <OpsGasteiButton
            label="Adicionar Objetivo"
            model={this.state.objetivo}
            onClick={this.adicionar}
          />
        </View>
      </SecuredContainer>
    )
  }
}

export { AdicionarObjetivo }
