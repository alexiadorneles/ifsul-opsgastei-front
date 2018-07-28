import angular from 'angular'
import component from './estatisticaComponent'
import EstatisticaController from './estatisticaCtrl'

import './estatistica.scss'

export default angular.module('pages.estatistica', [])
  .component('estatistica', component)
  .controller('EstatisticaController', EstatisticaController)
  .name
