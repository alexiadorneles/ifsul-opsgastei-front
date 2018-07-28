import actions from './templates/actions.html'
import STATUS from '../../../constants/objetivoStatus'

let _objetivoService
let _usuarioService
let _swalService

export default class SimulacaoCtrl {
  constructor(objetivoService, swalService, usuarioService) {
    _objetivoService = objetivoService
    _swalService = swalService
    _usuarioService = usuarioService

    //bindings
    this.buscarObjetivosIncompletos = this.buscarObjetivosIncompletos.bind(this)
    this.simular = this.simular.bind(this)
    this.somarValores = this.somarValores.bind(this)
    this.getSimulationMessage = this.getSimulationMessage.bind(this)

    // init
    this.actions = actions
    this.selecionados = []
    this.buscarSaldoAtual()
    this.buscarObjetivosIncompletos()
    this.somarValores()
  }

  buscarSaldoAtual() {
    _usuarioService.pegarSaldo().then(response => {
      this.saldoAtual = response.data
    })
  }

  buscarObjetivosIncompletos() {
    // TODO: alexia.dorneles 15/10/2017
    // adicionar no backend rota para buscar apenas incompletos
    _objetivoService.buscarPorUsuario().then(response => {
      const objetivos = response.data
      this.objetivosIncompletos = objetivos.filter(objetivo => objetivo.status === STATUS.INCOMPLETO)
    })
  }


  simular() {
    const swalOptions = {
      title: 'Simulação:',
      content:  {
        element: 'span',
        attributes: {
          innerText:  this.getSimulationMessage(),
        },
      },
    }
    _swalService.custom(swalOptions)
  }

  somarValores() {
    this.soma = this.selecionados.length > 0
      ? this.selecionados
        .reduce((acumulativo, novoValor) => acumulativo + novoValor)
        .toFixed(2)
      : 0
  }

  getSimulationMessage() {
    return `Valor total dos objetivos: R$ ${this.soma}.
    Saldo anterior: R$ ${this.saldoAtual}.
    Saldo final: R$ ${(this.saldoAtual - this.soma).toFixed(2)}.`
  }

  selecionarTodos() {
    if (this.isAllObjetivosSelected()) {
      this.selecionados = []
      this.somarValores()
    } else {
      this.objetivosIncompletos.forEach((objetivo) => {
        this.selecionados[objetivo.id] = objetivo.valor
      })
      this.somarValores()
    }
  }

  isAllObjetivosSelected() {
    return this.objetivosIncompletos.every(objetivo => this.selecionados.includes(objetivo.valor))
  }
}
