import actions from './templates/actions.html'

let _objetivoService
let _swalService
let _$rootScope

export default class OpsGasteiObjetivoIncompletoCtrl {
  constructor(objetivoService, swalService, $rootScope) {
    this.actions = actions
    _objetivoService = objetivoService
    _swalService = swalService
    _$rootScope = $rootScope

    //bindings
    this.prepararExclusao = this.prepararExclusao.bind(this)
    this.excluir = this.excluir.bind(this)
  }

  prepararExclusao() {
    _swalService.confirm('Desejas excluir o objetivo?', this.excluir, this.objetivo)
  }

  excluir(objetivo) {
    _objetivoService.deletar(objetivo.id).then(() => {
      _$rootScope.$emit('atualizarSaldo')
      this.callbackAcao()
    })
  }
}
