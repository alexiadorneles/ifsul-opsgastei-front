import STATUS from '../../../constants/objetivoStatus'

let _categoriaService
let _gastoFixoService
let _salarioService
let _objetivoService
let _$localStorage
let _$location

export default class ObjetivosCtrl {
  constructor(categoriaService, gastoFixoService, salarioService,
    objetivoService, $localStorage, $location) {

    _categoriaService = categoriaService
    _gastoFixoService = gastoFixoService
    _salarioService = salarioService
    _objetivoService = objetivoService
    _$localStorage = $localStorage
    _$location = $location

    //bindings
    this.buscarGastosFixos = this.buscarGastosFixos.bind(this)
    this.buscarObjetivos = this.buscarObjetivos.bind(this)
    this.buscarCategorias = this.buscarCategorias.bind(this)

    // init
    this.buscarGastosFixos()
    this.setarSalario()
    this.buscarObjetivos()
    this.buscarCategorias()
  }

  buscarGastosFixos() {
    _gastoFixoService.buscarPorUsuario().then(response => {
      this.gastosFixos = response.data
    })
  }

  setarSalario() {
    _salarioService.buscarAtual().then(response => {
      _$localStorage.salarioAtual = response.data
    })
  }

  buscarObjetivos() {
    _objetivoService.buscarPorUsuario().then(response => {
      const objetivos = response.data
      this.objetivosCompletos = objetivos.filter(objetivo => objetivo.status === STATUS.COMPLETO)
      this.objetivosIncompletos = objetivos.filter(objetivo => objetivo.status === STATUS.INCOMPLETO)
    })
  }

  buscarCategorias() {
    _categoriaService.buscarPorUsuario().then(response => {
      this.categorias = response.data
    })
  }

  goToSimulacao() {
    _$location.path('/objetivo/simulacao')
  }

  goToAddObjetivo(){
    _$location.path('/objetivo/adicionar-objetivo')
  }
}
