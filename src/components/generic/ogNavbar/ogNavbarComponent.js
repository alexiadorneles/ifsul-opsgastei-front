import controller from './ogNavbarCtrl'
import template from './ogNavbar.html'

export default {
  restrict: 'E',
  bindings: {
    categoria: '=',
    mes: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
