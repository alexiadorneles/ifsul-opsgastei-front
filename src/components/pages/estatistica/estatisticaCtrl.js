import _ from 'lodash'
import STATUS from '../../../constants/objetivoStatus'

let _objetivoService
let _gastoFixoService

export default class EstatisticaCtrl {
  constructor (objetivoService, gastoFixoService) {
    _objetivoService = objetivoService
    _gastoFixoService = gastoFixoService

    //bindings
    this.buscarObjetivos = this.buscarObjetivos.bind(this)
    this.buscarGastosFixos = this.buscarGastosFixos.bind(this)

    //init
    this.categorias = []
    this.buscarObjetivos()
    this.buscarGastosFixos()
  }

  buscarObjetivos() {
    _objetivoService.buscarPorUsuario().then(response => {
      const completos = response.data.filter(obj => obj.status === STATUS.COMPLETO)
      const agrupados = _.groupBy(completos, 'categoria.nome')
      this.categorias = completos.map(obj => obj.categoria)
      this.colors = completos.map( obj => obj.categoria.cor)

      this.data = Object.values(agrupados)
        .map(arr => arr.map(obj => obj.valor).reduce((a, b) => a+b, 0))
      this.labels = []
      Object.keys(agrupados).forEach(nomeCat => {
        this.labels.push(nomeCat)
      })

      this.series = ['Series A', 'Series B']

    })
  }

  buscarGastosFixos() {
    _gastoFixoService.buscarPorUsuario().then(response => {
      const gastos = response.data
      const agrupados = _.groupBy(gastos, 'categoria.nome')
      gastos.forEach(gasto => {
        this.categorias.push(gasto.categoria)
      })
      this.cores = gastos.map(gasto => gasto.categoria.cor)
      this.dado = this.data
      this.dado = Object.values(agrupados)
        .map(arr => arr.map(obj => obj.valor).reduce((a, b) => a+b, 0))
      this.nomes = []
      Object.keys(agrupados).forEach(nomeCat => {
        this.nomes.push(nomeCat)
      })
      this.serie = ['Series A', 'Series B']
      this.categorias = _.sortedUniq(this.categorias)
    })
  }
}
