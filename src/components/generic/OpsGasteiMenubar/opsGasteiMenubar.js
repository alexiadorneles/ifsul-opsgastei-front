import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import MenuItem from 'objects/MenuItem'
import { OpsGasteiMenuItem } from 'components/generic'
import STYLES from './opsGasteiMenubarStyle'

class OpsGasteiMenubar extends Component {
  state = { menuItems: [] }
  constructor() {
    super()

    this.goHome = this.goHome.bind(this)
    this.buscarMes = this.buscarMes.bind(this)
    this.goToEstatisticas = this.goToEstatisticas.bind(this)
    this.goToGastoFixos = this.goToGastoFixos.bind(this)
    this.goToPerfil = this.goToPerfil.bind(this)
  }

  componentDidMount() {
    this.initOptions()
  }

  // buscarMes() {
  // const title = 'Buscar Meses'
  // const text = 'Selecione o mês que deseja visualizar:'
  // const inputOptions = {
  //   type: 'month',
  // }
  // _swalService.input({ title, text, inputOptions }, this.carregarMes)
  // }

  carregarMes() {
    // const url = 'http://localhost:9000'
    // const [ano, mes] = dataParam.split('-')
    // _$window.location.href = `${url}/outro-mes/${ano}/${mes}`
  }

  verificarAtivo() {
    // return _$location.$$absUrl.endsWith(urlEsperado)
  }

  goHome() {
    this.changeMenuItemAtivo('home')
    Actions.objetivos()
  }

  buscarMes() {
    this.changeMenuItemAtivo('calendar')
  }

  goToEstatisticas() {
    this.changeMenuItemAtivo('pieChart')
    Actions.estatistica()
  }

  goToGastoFixos() {
    this.changeMenuItemAtivo('usd')
    Actions.gastosFixos()
  }

  goToPerfil() {
    this.changeMenuItemAtivo('user')
    Actions.perfil()
  }

  changeMenuItemAtivo(icone) {
    const { menuItems } = this.state
    const menuAtivo = menuItems.find(mi => !!mi.isAtivo)
    if (menuAtivo) menuAtivo.isAtivo = false
    menuItems.find(mi => mi.icone === icone).isAtivo = true
    this.setState({ menuItems: this.menuItems })
  }

  initOptions() {
    this.menuItems = [
      new MenuItem({
        icone: 'home',
        isAtivo: true,
        title: 'Inicial',
        onClick: this.goHome,
      }),
      new MenuItem({
        icone: 'calendar',
        isAtivo: false,
        title: 'Meses',
        onClick: this.buscarMes,
      }),
      new MenuItem({
        icone: 'pieChart',
        isAtivo: false,
        title: 'Estatísticas',
        onClick: this.goToEstatisticas,
      }),
      new MenuItem({
        icone: 'usd',
        isAtivo: false,
        title: 'Gastos',
        onClick: this.goToGastoFixos,
      }),
      new MenuItem({
        icone: 'user',
        isAtivo: false,
        title: 'Perfil',
        onClick: this.goToPerfil,
      }),
    ]

    this.setState({ menuItems: this.menuItems })
  }

  renderMenuItem() {
    const { menuItems } = this.state
    return menuItems.map(menuItem => {
      return <OpsGasteiMenuItem key={menuItem.icone} menuItem={menuItem} />
    })
  }

  render() {
    return (
      <View style={STYLES.menuBar}>
        {this.renderMenuItem()}
      </View>
    )
  }
}

export default OpsGasteiMenubar
