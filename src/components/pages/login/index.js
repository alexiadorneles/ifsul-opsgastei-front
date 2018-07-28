import angular from 'angular'
import component from './loginComponent'
import loginConfig from './loginConfig'

import './login.scss'

export default angular.module('pages.login', [])
  .config(loginConfig)
  .component('login', component)
  .name
