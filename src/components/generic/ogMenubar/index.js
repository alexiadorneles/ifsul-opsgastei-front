import React, { Component } from 'react'
import { View } from 'react-native'
import MenuItem from 'objects/MenuItem'
import OpsGasteiMenuItem from 'components/generic/ogMenuItem'
import STYLES from './ogMenubarStyle'

class OpsGasteiMenubar extends Component {
  constructor() {
    super()

    this.initOptions()
  }

  buscarMes() {
    // const title = 'Buscar Meses'
    // const text = 'Selecione o mês que deseja visualizar:'
    // const inputOptions = {
    //   type: 'month',
    // }
    // _swalService.input({ title, text, inputOptions }, this.carregarMes)
  }

  carregarMes(dataParam) {
    // const url = 'http://localhost:9000'
    // const [ano, mes] = dataParam.split('-')
    // _$window.location.href = `${url}/outro-mes/${ano}/${mes}`
  }

  verificarAtivo(urlEsperado) {
    // return _$location.$$absUrl.endsWith(urlEsperado)
  }

  initOptions() {
    this.menuItems = [
      new MenuItem({
        icone: 'home',
        isAtivo: false,
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
  }

  renderMenuItem() {
    return this.menuItems.map(menuItem => {
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
