import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import PropTypes from 'prop-types'

import STYLES from './ogGastoFixoStyle'

class OpsGasteiGastoFixo extends Component {
  static propTypes = {
    gastoFixo: PropTypes.object,
  }
  state = { gastoFixo: {} }

  constructor() {
    super()
    // this.gastoFixo = this.props.gastoFixo
    // this.callbackExcluir = this.props.callbackExcluir
  }

  mostrarOpcoes() {
    this.gastoFixo.opcoes = !this.gastoFixo.opcoes
    this.setState({ gastoFixo: this.gastoFixo })
  }

  prepararExclusao() {
    // _swalService.confirm('Desejas excluir este gasto fixo?', this.excluirGasto, this.gastoFixo)
  }

  excluirGasto() {
    this.gastoFixo.fimData = new Date()
    // _gastoFixoService.deletar(this.gastoFixo).then(() => {
    //   this.callbackExcluir()
    // })
  }

  editar() {
    // const title = 'Editar Gasto Fixo'
    // const text = 'Digite o novo valor do gasto fixo (somente números): '
    // const inputOptions = {
    //   type: 'number',
    //   placeholder: 'R$ 500,00',
    //   step: '0.50',
    // }

    // _swalService.input({ title, text, inputOptions }, callback)
  }

  prepararEdicaoAtual() {
    this.editar(this.gastoFixo, this.editarGastoAtual)
  }

  prepararEdicaoProximo() {
    this.editar(this.gastoFixo, this.editarGastoProximos)
  }

  editarGastoAtual() {
    // _gastoFixoService.editarAgora(this.construirDtoEdicao(valor, this.gastoFixo)).then(() => {
    //   this.callbackExcluir()
    //   _$rootScope.$emit('atualizarSaldo')
    // })
  }

  editarGastoProximos() {
    // _gastoFixoService.editarProximos(this.construirDtoEdicao(valor, this.gastoFixo)).then(() => {
    //   this.callbackExcluir()
    // TODO: ver workaround para este trecho
    // _$rootScope.$emit('atualizarSaldo')
    // })
  }

  construirDtoEdicao(valor, gastoFixo) {
    return {
      valor,
      gastoFixo: gastoFixo,
    }
  }

  renderOpcoes() {
    const { gastoFixo } = this.props
    if (gastoFixo.opcoes) {
      return (
        <View style={STYLES.opcoes}>
          <TouchableWithoutFeedback
            style={STYLES.op}
            onPress={this.prepararEdicaoAtual}
          >
            <FontAwesome style={STYLES.conf}>
              {Icons.pencil}
              <Text style={STYLES.op}> Editar Atual </Text>
            </FontAwesome>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            style={STYLES.op}
            onPress={this.prepararEdicaoProximo}
          >
            <FontAwesome style={STYLES.conf}>
              {Icons.pencil}
              <Text style={STYLES.op}> Editar Próximos </Text>
            </FontAwesome>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            style={STYLES.op}
            onPress={this.prepararExclusao}
          >
            <FontAwesome style={STYLES.deletarIcon}>
              {Icons.times}
              <Text style={STYLES.op}> Excluir </Text>
            </FontAwesome>
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }

  render() {
    const { gastoFixo } = this.props

    return (
      <View style={STYLES.gastosContainer}>
        <View style={STYLES.gastoTItle}>
          <Text style={STYLES.texto}>{gastoFixo.nome}</Text>
          <TouchableNativeFeedback onPress={this.mostrarOpcoes}>
            <FontAwesome style={STYLES.conf}>{Icons.cog}</FontAwesome>
          </TouchableNativeFeedback>
        </View>

        {this.renderOpcoes()}

        <View style={STYLES.info}>
          <View style={STYLES.wrapper}>
            <Text style={STYLES.type}>Valor: </Text>
            <Text>{gastoFixo.valor}</Text>
          </View>
          <View style={STYLES.wrapper}>
            <Text style={STYLES.type}>Período: </Text>
            <Text>{gastoFixo.duracaoMeses} meses</Text>
          </View>

          <View style={STYLES.categoria}>
            <View style={STYLES.infoCategoria}>
              <Text style={STYLES.type}>Categoria: </Text>
              <Text style={STYLES.infoCategoriaNome}>{gastoFixo.categoria.nome}</Text>
            </View>

          </View>
        </View>
      </View>
    )
  }
}

export default OpsGasteiGastoFixo
