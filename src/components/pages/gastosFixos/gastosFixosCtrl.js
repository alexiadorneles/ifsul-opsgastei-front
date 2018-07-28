let _gastoFixoService
let _categoriaService

export default class GastosFixosCtrl {
  constructor(categoriaService, gastoFixoService) {

    _categoriaService = categoriaService
    _gastoFixoService = gastoFixoService

    //bindings
    this.buscarGastosFixos = this.buscarGastosFixos.bind(this)

    // init
    this.buscarCategorias()
    this.buscarGastosFixos()
  }

  buscarCategorias() {
    _categoriaService.buscarPorUsuario().then(response => {
      this.categorias = response.data
    })
  }

  buscarGastosFixos() {
    _gastoFixoService.buscarPorUsuario().then(response => {
      this.gastosFixos = response.data
    })
  }

}
