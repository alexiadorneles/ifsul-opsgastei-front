export default class OpsGasteiTotalizador {
  constructor() {
  }

  getTotal() {
    return this.listObjetivos
      .map(objetivo => objetivo.valor)
      .reduce((a, b) => a + b)
  }

}
