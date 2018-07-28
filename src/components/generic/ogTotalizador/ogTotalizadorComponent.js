import controller from './ogTotalizadorCtrl'
import template from './ogTotalizador.html'

export default {
  restrict: 'E',
  bindings: {
    listObjetivos: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
