import controller from'./ogGraphCtrl'
import template from'./ogGraph.html'

export default {
  restrict:'E',
  bindings: {
    type:'=',
    data:'=',
    colors:'=',
    onClick:'=',
    labels:'=',
    series:'=',
    datasets:'=',
    options:'=',
    categorias:'=',
  },
  template,
  controller,
  controllerAs:'ctrl',
}
