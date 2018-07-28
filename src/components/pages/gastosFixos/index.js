import angular from 'angular'
import gfAdicionarGasto from './gfAdicionarGasto'
import component from './gastosFixosComponent'

import './gastosFixos.scss'

export default angular.module('pages.gastosFixos', [
  gfAdicionarGasto,
])
  .component('gastosFixos', component)
  .name
