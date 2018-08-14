import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import {
  OpsGasteiObjetivoIncompleto,
  OpsGasteiObjetivoCompleto,
  OpsGasteiGastoFixo,
  OpsGasteiSaldo,
  OpsGasteiBox,
  OpsGasteiButton,
  OpsGasteiTotalizador,
} from 'components/generic'
import STATUS from 'constants/objetivoStatus'
import STYLES from './objetivosStyle'

class Objetivos extends Component {
  state = { objetivosCompletos: [], objetivosIncompletos: [], gastosFixos: [] }

  constructor() {
    super()

    //bindings
    this.buscarGastosFixos = this.buscarGastosFixos.bind(this)
    this.buscarObjetivos = this.buscarObjetivos.bind(this)
    this.buscarCategorias = this.buscarCategorias.bind(this)
    this.setarSalario = this.setarSalario.bind(this)
    this.goToAddObjetivo = this.goToAddObjetivo.bind(this)
    this.goToSimulacao = this.goToSimulacao.bind(this)
  }

  componentDidMount() {
    this.buscarGastosFixos()
    this.setarSalario()
    this.buscarObjetivos()
    this.buscarCategorias()
  }

  buscarGastosFixos() {
    const response = {
      data: [
        {
          nome: 'Almoço',
          valor: 200,
          categoria: {
            nome: 'Comida',
            cor: 'red',
          },
        },
        {
          nome: 'Spotify',
          valor: 25,
          categoria: {
            nome: 'Música',
            cor: 'blue',
          },
        },
        {
          nome: 'Netflix',
          valor: 50,
          categoria: {
            nome: 'Entretenimento',
            cor: 'green',
          },
        },
      ],
    }
    // _gastoFixoService.buscarPorUsuario().then(response => {
    const gastosFixos = response.data
    this.setState({ gastosFixos })
    // })
  }

  setarSalario() {
    // _salarioService.buscarAtual().then(response => {
    // _$localStorage.salarioAtual = response.data
    // })
  }

  buscarObjetivos() {
    const response = {
      data: [
        {
          nome: 'Xis',
          valor: 15,
          status: STATUS.COMPLETO,
          categoria: {
            nome: 'Comida',
            cor: 'red',
          },
        },
        {
          nome: 'Violão',
          valor: 250,
          status: STATUS.COMPLETO,
          categoria: {
            nome: 'Música',
            cor: 'blue',
          },
        },
        {
          nome: 'Game of Thrones',
          valor: 120,
          status: STATUS.COMPLETO,
          categoria: {
            nome: 'Entretenimento',
            cor: 'green',
          },
        },
        {
          nome: 'Lasanha',
          valor: 15,
          status: STATUS.INCOMPLETO,
          categoria: {
            nome: 'Comida',
            cor: 'red',
          },
        },
        {
          nome: 'Piano',
          valor: 250,
          status: STATUS.INCOMPLETO,
          categoria: {
            nome: 'Música',
            cor: 'blue',
          },
        },
        {
          nome: 'Supernatural',
          valor: 120,
          status: STATUS.INCOMPLETO,
          categoria: {
            nome: 'Entretenimento',
            cor: 'green',
          },
        },
      ],
    }
    // _objetivoService.buscarPorUsuario().then(response => {
    const objetivos = response.data
    const objetivosCompletos = objetivos.filter(objetivo => objetivo.status === STATUS.COMPLETO)
    const objetivosIncompletos = objetivos.filter(objetivo => objetivo.status === STATUS.INCOMPLETO)
    this.setState({ objetivosIncompletos, objetivosCompletos })
    // })
  }

  buscarCategorias() {
    // _categoriaService.buscarPorUsuario().then(response => {
    // this.categorias = response.data
    const categorias = [{ nome: 'Comida', cor: 'blue' }, { nome: 'Vestuário', cor: 'red' }, { nome: 'Alimentação', cor: 'green' }, { nome: 'Transporte', cor: 'black' }]
    this.setState({ categorias })
    // })
  }

  goToSimulacao() {
    // _$location.path('/objetivo/simulacao')
  }

  goToAddObjetivo() {
    // _$location.path('/objetivo/adicionar-objetivo')
  }

  renderObjetivosIncompletos() {
    const { objetivosIncompletos } = this.state
    return objetivosIncompletos.map(o => <OpsGasteiObjetivoIncompleto key={o.nome} objetivo={o} callbackAcao={this.buscarObjetivos} />)
  }

  renderObjetivosCompletos() {
    const { objetivosCompletos } = this.state
    return objetivosCompletos.map(o => <OpsGasteiObjetivoCompleto key={o.nome} objetivo={o} callbackAcao={this.buscarObjetivos} />)
  }

  renderGastosFixos() {
    const { gastosFixos } = this.state
    return gastosFixos.map(gf => <OpsGasteiGastoFixo key={gf.nome} gastoFixo={gf} callbackExcluir={this.buscarGastosFixos} />)
  }

  render() {
    return (
      <ScrollView style={STYLES.container} >
        <OpsGasteiSaldo />
        <View style={STYLES.objetivosContainer}>
          <OpsGasteiBox title="Objetivos Incompletos">
            {this.renderObjetivosIncompletos()}
            <View style={STYLES.buttonContainer}>
              <OpsGasteiButton label="adicionar objetivo" onClick={this.goToAddObjetivo} />
            </View>

            <View style={STYLES.buttonContainer}>
              <OpsGasteiButton label="simular compra" onClick={this.goToSimulacao} />
            </View>
          </OpsGasteiBox>

          <OpsGasteiBox title="Gastos Fixos">
            {this.renderGastosFixos()}
          </OpsGasteiBox>

          <OpsGasteiBox title="Objetivos Completos">
            {this.renderObjetivosCompletos()}

            <OpsGasteiTotalizador objetivos={this.state.objetivosCompletos} />
          </OpsGasteiBox>

        </View>
      </ScrollView>
    )
  }
}

export default Objetivos
