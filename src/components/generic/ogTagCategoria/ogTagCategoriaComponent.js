import controller from './ogTagCategoriaCtrl'
import template from './ogTagCategoria.html'

export default {
  restrict: 'E',
  bindings: {
    cor: '@',
    icone: '@',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
