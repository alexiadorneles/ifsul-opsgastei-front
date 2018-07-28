import angular from 'angular'

import ogBox from './ogBox'
import ogButton from './ogButton'
import ogCategoria from './ogCategoria'
import ogGastoFixo from './ogGastoFixo'
import ogGraph from './ogGraph'
import ogLegendaGrafico from './ogLegendaGrafico'
import ogLogo from './ogLogo'
import ogMenubar from './ogMenubar'
import ogNavbar from './ogNavbar'
import ogObjetivo from './ogObjetivo'
import ogObjetivoCompleto from './ogObjetivoCompleto'
import ogObjetivoIncompleto from './ogObjetivoIncompleto'
import ogSaldo from './ogSaldo'
import ogTagCategoria from './ogTagCategoria'
import ogTotalizador from './ogTotalizador'

export default angular.module('components.generic', [
  ogBox,
  ogButton,
  ogCategoria,
  ogGastoFixo,
  ogGraph,
  ogLegendaGrafico,
  ogLogo,
  ogMenubar,
  ogNavbar,
  ogObjetivo,
  ogObjetivoCompleto,
  ogObjetivoIncompleto,
  ogSaldo,
  ogTagCategoria,
  ogTotalizador,
]).name
