import COLORS from 'constants/colors'

const DEFAULT_TEXT = {
	color: COLORS.text,
	marginVertical: 2,
}

export default {
	container: {
		flex: 1,
	},

	headerProfile: {
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
	},

	nome: {
		...DEFAULT_TEXT,
		fontSize: 30,
	},

	cash: {
		...DEFAULT_TEXT,
		fontSize: 15,
	},

	picture: {
		height: 150,
		width: 150,
		borderRadius: 150 / 2,
	},

	list: {
		flex: 1,
		justifyContent: 'space-between',
	},

	listItem: {
		fontSize: 20,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.borderWrapper,
	},
}
