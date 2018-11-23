import React, { Component } from 'react'
import { Text, View, TextInput, Picker } from 'react-native'
import MaskedInput from 'react-native-masked-input'
import { Actions } from 'react-native-router-flux'

import { OpsGasteiButton, SecuredContainer } from 'components/generic'
import STYLES from './adicionarObjetivoStyle'
import { OBJETIVOS } from 'constants/routerKeys'

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

  adicionar(objetivo) {
    const data = new Date()
    objetivo.status = 'I'
    objetivo.data = data
    Actions[OBJETIVOS]()
    // _objetivoService.criar(objetivo).then( () => {
    //   this.objetivoAdicionado(objetivo.nome)
    //   _$location.url('/objetivo')
    // })
  }

  buscarCategorias() {
    // _categoriaService.buscarPorUsuario().then(res => this.categorias = res.data)
    return [{ nome: 'Comida' }, { nome: 'Vestuário' }, { nome: 'Alimentação' }, { nome: 'Transporte' }]
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
