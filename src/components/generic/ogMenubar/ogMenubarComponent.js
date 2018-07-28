import controller from './ogMenubarCtrl'
import template from './ogMenubar.html'

export default {
  restrict: 'E',
  bindings: {
    categoria: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
