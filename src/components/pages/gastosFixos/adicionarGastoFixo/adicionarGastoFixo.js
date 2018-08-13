import React, { Component } from 'react'
import { Text, ScrollView, View, TextInput, Picker } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'
import PropTypes from 'prop-types'

import { OpsGasteiButton } from 'components/generic'
import STYLES from './adicionarGastoFixoStyle'

class AdicionarGastoFixo extends Component {
  static propTypes = {
    categorias: PropTypes.array,
    callbackAdicionar: PropTypes.function,
  }

  state = { showAdicionar: false, gastoFixo: {} }
  constructor(props) {
    super(props)

    //bindings
    this.mostrarAdicionar = this.mostrarAdicionar.bind(this)
    this.adicionar = this.adicionar.bind(this)
    this.zerarState = this.zerarState.bind(this)
  }

  componentDidMount() {
    this.zerarState()
  }

  zerarState() {
    this.setState({
      showAdicionar: false,
      gastoFixo: {},
      categorias: this.props.categorias,
    })
  }

  mostrarAdicionar() {
    this.setState({
      showAdicionar: true,
      categorias: this.props.categorias,
    })
  }

  adicionar() {
    const { gastoFixo } = this.state
    const inicioData = new Date()
    const fimData = new Date()
    const duracaoMeses = gastoFixo.periodo

    fimData.setMonth(inicioData.getMonth() + duracaoMeses)

    // const gastoFixoModel = new GastoFixo({
    //   ...gastoFixo,
    //   inicioData,
    //   fimData,
    //   duracaoMeses,
    // })


    // _gastoFixoService.criar(gastoFixoModel).then(() => {
    this.zerarState()
    // _swalService.success(`'${gastoFixoModel.nome}' adicionado com sucesso.`)
    this.props.callbackAdicionar()
    // })

  }

  atualizarPropriedadeGastoFixoEState(prop, value, isMoney) {
    if (isMoney) value = this.tratarMoneyMask(value)
    const { gastoFixo } = this.state
    gastoFixo[prop] = value
    this.setState({ gastoFixo })
  }

  tratarMoneyMask(value) {
    const changedValue = value.replace('R$', '').replace('.', '').replace(',', '.')
    return Number(changedValue)
  }


  renderPickerItems() {
    const { categoria } = this.state.gastoFixo
    const categorias = this.state.categorias
    const retorno = []
    if (!categoria) {
      retorno.push(<Picker.Item key={''} label={' '} value={undefined} />)
    }

    retorno.push(...categorias.map(cat => <Picker.Item key={cat.nome} label={cat.nome} value={cat} selectedValue={categoria && categoria.nome} />))
    return retorno

  }

  renderAdicionarGastoFixo() {
    if (!this.state.showAdicionar) return null
    return (
      <View style={STYLES.adicionarGastoFixo}>
        <Text style={STYLES.title}> ADICIONAR GASTO FIXO </Text>
        <TextInput
          style={STYLES.input}
          placeholder="Nome"
          value={this.state.gastoFixo.nome}
          onChangeText={text => this.atualizarPropriedadeGastoFixoEState('nome', text)}
        />

        <TextInputMask
          value={this.state.gastoFixo.valor}
          refInput={valor => this.valorGasto = valor}
          type={'money'}
          style={STYLES.input}
          placeholder="Valor"
          onChangeText={valor => this.atualizarPropriedadeGastoFixoEState('valor', valor, true)}
        />

        <TextInputMask
          value={this.state.gastoFixo.periodo}
          placeholder="Periodo (em meses)"
          type="only-numbers"
          style={STYLES.input}
          onChangeText={numero => this.atualizarPropriedadeGastoFixoEState('periodo', numero)}
        />

        <Picker
          selectedValue={this.state.gastoFixo.categoria}
          style={STYLES.input}
          value={this.state.gastoFixo.categoria}
          prompt="Escolha a Categoria"
          onValueChange={categoria => this.atualizarPropriedadeGastoFixoEState('categoria', categoria)}
        >
          {this.renderPickerItems()}
        </Picker>

      </View>
    )
  }

  render() {
    return (
      <ScrollView style={STYLES.container}>
        {this.renderAdicionarGastoFixo()}

        <View style={STYLES.buttonContainer}>
          <OpsGasteiButton label="Adicionar Gasto Fixo" if={!this.state.showAdicionar} onClick={this.mostrarAdicionar} />
          <OpsGasteiButton label="Adicionar Gasto Fixo" if={this.state.showAdicionar} onClick={this.adicionar} model={this.state.gastoFixo} />
        </View>

      </ScrollView>
    )
  }
}

export default AdicionarGastoFixo
