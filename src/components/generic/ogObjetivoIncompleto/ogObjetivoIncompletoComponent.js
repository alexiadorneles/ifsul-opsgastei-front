import controller from './ogObjetivoIncompletoCtrl'
import template from './ogObjetivoIncompleto.html'

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
