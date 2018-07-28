import angular from 'angular'

import categorias from './categorias'
import adicionarObjetivo from './adicionarObjetivo'
import estatistica from './estatistica'
import gastosFixos from './gastosFixos'
import login from './login'
import inicial from './inicial'
import objetivos from './objetivos'
import outroMes from './outroMes'
import perfil from './perfil'
import simulacao from './simulacao'
import tutorial from './tutorial'

export default angular.module('components.pages', [
  adicionarObjetivo,
  categorias,
  estatistica,
  gastosFixos,
  inicial,
  login,
  objetivos,
  outroMes,
  perfil,
  simulacao,
  tutorial,
]).name
