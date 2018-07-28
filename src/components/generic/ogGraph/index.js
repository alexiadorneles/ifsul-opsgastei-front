import angular from 'angular'
import Chart from 'angular-chart.js'

import component from './ogGraphComponent'

import './ogGraph.scss'

export default angular.module('generic.ogGraph', [Chart])
  .component('ogGraph', component)
  .name
