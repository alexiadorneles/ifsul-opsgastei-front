let _categoriaService
let _objetivoService
let _swalService
let _$location

export default class AdicionarObjetivoCtrl {
  constructor($location, objetivoService, categoriaService, swalService) {

    _categoriaService = categoriaService
    _swalService = swalService
    _objetivoService = objetivoService
    _$location = $location

    //bindings
    this.adicionar = this.adicionar.bind(this)
    this.objetivoAdicionado = this.objetivoAdicionado.bind(this)
    this.buscarCategorias = this.buscarCategorias.bind(this)

    // init
    this.buscarCategorias()
  }

  objetivoAdicionado(nomeObjetivo) {
    _swalService.success(`'${nomeObjetivo}' adicionado com sucesso.`)
  }

  adicionar(objetivo) {
    const data = new Date()
    objetivo.status = 'I'
    objetivo.data = data
    _objetivoService.criar(objetivo).then( () => {
      this.objetivoAdicionado(objetivo.nome)
      _$location.url('/objetivo')
    })
  }

  buscarCategorias() {
    _categoriaService.buscarPorUsuario().then(res => this.categorias = res.data)
  }
}
