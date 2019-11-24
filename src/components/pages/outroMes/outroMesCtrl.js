import STATUS from '../../../constants/objetivoStatus'
import moment from 'moment'

let _gastoFixoService
let _salarioService
let _objetivoService

export default class OutroMesCtrl {
	constructor(
		categoriaService,
		gastoFixoService,
		salarioService,
		objetivoService,
		swalService,
		$localStorage,
		$location,
		$routeParams,
	) {
		_gastoFixoService = gastoFixoService
		_salarioService = salarioService
		_objetivoService = objetivoService

		//bindings
		this.buscarGastosFixos = this.buscarGastosFixos.bind(this)
		this.buscarSalario = this.buscarSalario.bind(this)
		this.buscarObjetivos = this.buscarObjetivos.bind(this)

		// init
		const { ano, mes } = $routeParams
		this.mes = `${ano}-${mes}-01`
		this.periodo = { ano, mes }
		this.buscarSalario(ano, mes).then(response => {
			if (!response.data) {
				$location.path('/objetivo')
				swalService.info(`Você foi redirecionado à tela inicial pois não possui dados
          no mês ${moment(this.mes)
						.locale('pt-br')
						.format('MMMM')
						.replace(/\b\w/g, l => l.toUpperCase())} de ${moment(this.mes).year()}`)
				return
			}
			this.salario = response.data
			this.buscarGastosFixos(ano, mes)
			this.buscarObjetivos(ano, mes)
		})
	}

	buscarGastosFixos(ano, mes) {
		_gastoFixoService.buscarPorUsuarioEData(ano, mes).then(response => {
			this.gastosFixos = response.data
		})
	}

	buscarSalario(ano, mes) {
		return _salarioService.buscarPorUsuarioEData(ano, mes)
	}

	buscarObjetivos(ano, mes) {
		_objetivoService.buscarPorUsuarioEData(ano, mes).then(response => {
			const objetivos = response.data
			this.objetivosCompletos = objetivos.filter(objetivo => objetivo.status === STATUS.COMPLETO)
			this.objetivosIncompletos = objetivos.filter(objetivo => objetivo.status === STATUS.INCOMPLETO)
		})
	}
}
