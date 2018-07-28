import controller from'./ogLegendaGraficoCtrl'
import template from'./ogLegendaGrafico.html'

export default {
  restrict:'E',
  bindings: {
    categorias: '=',
  },
  template,
  controller,
  controllerAs:'ctrl',
}
