import COLORS from 'constants/colors'

export default {
	gastosContainer: {
		paddingTop: 10,
		marginBottom: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
	},

	gastoTitle: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	texto: {
		fontSize: 22,
		fontWeight: '600',
		margin: 0,
	},

	innerContainer: {
		paddingLeft: 15,
	},

	text: {
		marginTop: 5,
		color: COLORS.darkGrey,
	},

	opcoes: {
		borderRadius: 10,
		top: 40,
		padding: 8,
		backgroundColor: COLORS.borderWrapper,
		position: 'absolute',
		right: 0,
		elevation: 2,
	},

	opItemContainer: {
		marginVertical: 10,
		flexDirection: 'row',
	},

	op: {},

	categoria: {
		width: '100%',
		paddingRight: 15,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
	},

	wrapper: {
		flexDirection: 'row',
	},
}
