let _$location

export default class PerfilCtrl {
	constructor($location) {
		_$location = $location
	}

	goHome() {
		_$location.path('/objetivo')
	}
}
