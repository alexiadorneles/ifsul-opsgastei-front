
let _gastoFixoService
let _swalService

export default class GastosFixosAdicionarGastoCtrl {
  constructor(gastoFixoService, swalService) {
    _gastoFixoService = gastoFixoService
    _swalService = swalService

    this.mostrarAdicionar = this.mostrarAdicionar.bind(this)
    this.adicionar = this.adicionar.bind(this)
  }

  mostrarAdicionar() {
    this.showAdicionar = true
  }

  adicionar() {
    const inicioData = new Date()
    const fimData = new Date()
    const duracaoMeses = this.gastoFixo.periodo

    // data final é o periodo mais quantos meses a partir do inicial
    fimData.setMonth(inicioData.getMonth() + duracaoMeses)

    const gastoFixo = {
      nome: this.gastoFixo.nome,
      valor: this.gastoFixo.valor,
      categoria: this.gastoFixo.selectedCategoria,
      inicioData,
      fimData, // TODO permitir enviar undefined, para casos indeterminados
      duracaoMeses,
    }

    _gastoFixoService.criar(gastoFixo).then(() => {
      this.showAdicionar = false
      this.gastoFixo = {}
      _swalService.success(`'${gastoFixo.nome}' adicionado com sucesso.`)
      this.callbackAdicionar()
    })

  }
}
