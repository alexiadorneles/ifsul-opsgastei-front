import angular from 'angular'
import caAdicionarCategoria from './caAdicionarCategoria'
import component from './categoriasComponent'

import './categorias.scss'

export default angular.module('pages.categorias', [
  caAdicionarCategoria,
])
  .component('categorias', component)
  .name
