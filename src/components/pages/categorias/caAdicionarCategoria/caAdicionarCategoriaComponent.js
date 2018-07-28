import controller from './caAdicionarCategoriaCtrl'
import template from './caAdicionarCategoria.html'

export default {
  restrict: 'E',
  bindings: {
    callbackAdicionar: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
