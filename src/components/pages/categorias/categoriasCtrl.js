let _categoriaService

export default class CategoriasCtrl {
  constructor(categoriaService) {

    _categoriaService = categoriaService

    //bindings
    this.buscarCategorias = this.buscarCategorias.bind(this)

    // init
    this.buscarCategorias()
  }

  buscarCategorias() {
    _categoriaService.buscarPorUsuario().then(response => {
      this.categorias = response.data
    })
  }
}
