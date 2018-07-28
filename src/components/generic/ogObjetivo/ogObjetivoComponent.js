import controller from './ogObjetivoCtrl'
import template from './ogObjetivo.html'

export default {
  restrict: 'E',
  bindings: {
    objetivo: '=',
    actions: '=',
    caller: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
