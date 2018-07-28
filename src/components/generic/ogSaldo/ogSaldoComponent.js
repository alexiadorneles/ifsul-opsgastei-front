import controller from './ogSaldoCtrl'
import template from './ogSaldo.html'

export default {
  restrict: 'E',
  bindings: {
    periodo: '=',
    salario: '=',
  },
  template,
  controller,
  controllerAs: 'ctrl',
}
