import moment from 'moment'

export default class OpsGasteiNavbar {
  constructor() {
  }

  getNomeMes() {
    return this.mes
      ? `${moment(this.mes).locale('pt-br').format('MMMM')} / ${moment(this.mes).year()}`
      : moment().locale('pt-br').format('MMMM')
  }

}
