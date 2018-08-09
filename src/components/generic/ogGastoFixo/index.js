import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import OpsGasteiCategoria from 'components/generic/ogCategoria'
import OpsGasteiIcone from 'components/generic/ogIcone'
import STYLES from './ogGastoFixoStyle'

class OpsGasteiGastoFixo extends Component {
  static propTypes = {
    gastoFixo: PropTypes.object,
  }
  state = { gastoFixo: { categoria: {} } }

  constructor() {
    super()
    // this.gastoFixo = this.props.gastoFixo
    // this.callbackExcluir = this.props.callbackExcluir

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
      gastoFixo: gastoFixo,
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
      <View style={STYLES.gastosContainer}>
        <View style={STYLES.gastoTitle}>
          <Text style={STYLES.texto}>{gastoFixo.nome}</Text>
          <TouchableOpacity onPress={this.mostrarOpcoes}>
            <OpsGasteiIcone fontSize={28} icone="cog" />
          </TouchableOpacity>
        </View>

        {this.renderOpcoes(gastoFixo)}

        <View style={STYLES.innerContainer}>
          <View style={STYLES.info}>
            <View style={STYLES.wrapper}>
              <Text style={STYLES.text}>Valor: </Text>
              <Text style={STYLES.text}>{gastoFixo.valor}</Text>
            </View>
            <View style={STYLES.wrapper}>
              <Text style={STYLES.text}>Período: </Text>
              <Text style={STYLES.text}>{gastoFixo.duracaoMeses} meses</Text>
            </View>
          </View>

          <View style={STYLES.categoria}>
            <OpsGasteiCategoria style={STYLES.categoria} categoria={gastoFixo.categoria} />
          </View>
        </View>
      </View>
    )
  }
}

export default OpsGasteiGastoFixo
