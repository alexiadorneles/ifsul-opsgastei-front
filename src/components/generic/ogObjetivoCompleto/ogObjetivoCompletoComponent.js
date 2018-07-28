import controller from './ogObjetivoCompletoCtrl'
import template from './ogObjetivoCompleto.html'

export default {
  restrict: 'E',
  bindings: {
    objetivo: '=',
    callbackAcao: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
