let _categoriaService
let _swalService

export default class CategoriasAdicionarCategoriaCtrl {
  constructor(categoriaService, swalService) {
    _categoriaService = categoriaService
    _swalService = swalService

    this.mostrarAdicionar = this.mostrarAdicionar.bind(this)
    this.adicionar = this.adicionar.bind(this)
  }

  mostrarAdicionar() {
    this.showAdicionar = true
  }

  adicionar() {
    // preto, se nao selecionado
    this.categoria.cor = this.categoria.cor || '#000000'
    _categoriaService.criar(this.categoria).then(() => {
      this.callbackAdicionar()
      _swalService.success('Categoria adicionada.')
    })
  }
}
