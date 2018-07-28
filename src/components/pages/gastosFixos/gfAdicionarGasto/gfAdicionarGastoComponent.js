import controller from './gfAdicionarGastoCtrl'
import template from './gfAdicionarGasto.html'

export default {
  restrict: 'E',
  bindings: {
    categorias: '=',
    callbackAdicionar: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
