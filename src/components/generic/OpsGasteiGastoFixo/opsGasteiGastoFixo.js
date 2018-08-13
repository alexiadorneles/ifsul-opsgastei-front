import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { OpsGasteiIcone, OpsGasteiDisplayer } from 'components/generic'
import STYLES from './opsGasteiGastoFixoStyle'

class OpsGasteiGastoFixo extends Component {
  static propTypes = {
    gastoFixo: PropTypes.object,
  }

  state = { gastoFixo: { categoria: {} }, valor: 1, periodo: 1 }

  constructor() {
    super()

    this.mostrarOpcoes = this.mostrarOpcoes.bind(this)
    this.prepararExclusao = this.prepararExclusao.bind(this)
    this.excluirGasto = this.excluirGasto.bind(this)
    this.editar = this.editar.bind(this)
    this.prepararEdicaoAtual = this.prepararEdicaoAtual.bind(this)
    this.prepararEdicaoProximo = this.prepararEdicaoProximo.bind(this)
    this.editarGastoAtual = this.editarGastoAtual.bind(this)
    this.editarGastoProximos = this.editarGastoProximos.bind(this)
    this.editarGastoProximos = this.editarGastoProximos.bind(this)
  }

  componentDidMount() {
    const { gastoFixo } = this.props
    gastoFixo.periodo = `${gastoFixo.periodo} meses`
    this.setState({ gastoFixo })
  }

  mostrarOpcoes() {
    const { gastoFixo } = this.state
    gastoFixo.opcoes = !gastoFixo.opcoes
    this.setState({ gastoFixo })
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
      gastoFixo,
    }
  }

  renderOpcoes(gastoFixo) {
    if (gastoFixo.opcoes) {
      return (
        <View style={STYLES.opcoes}>
          <TouchableOpacity
            style={STYLES.op}
            onPress={this.prepararEdicaoAtual}
          >
            <View style={STYLES.opItemContainer}>
              <OpsGasteiIcone icone="pencil" />
              <Text style={STYLES.op}> Editar Atual </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={STYLES.op}
            onPress={this.prepararEdicaoProximo}
          >
            <View style={STYLES.opItemContainer}>
              <OpsGasteiIcone icone="pencil" />
              <Text style={STYLES.op}> Editar Próximos </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={STYLES.op}
            onPress={this.prepararExclusao}
          >
            <View style={STYLES.opItemContainer}>
              <OpsGasteiIcone icone="times" />
              <Text style={STYLES.op}> Excluir </Text>
            </View>
          </TouchableOpacity>
        </View >
      )
    }
  }

  render() {
    const { gastoFixo } = this.state
    return (
      <OpsGasteiDisplayer object={gastoFixo}>
        <TouchableOpacity onPress={this.mostrarOpcoes}>
          <OpsGasteiIcone fontSize={28} icone="cog" />
        </TouchableOpacity>

        {this.renderOpcoes(gastoFixo)}
      </OpsGasteiDisplayer>
    )
  }
}

export default OpsGasteiGastoFixo
