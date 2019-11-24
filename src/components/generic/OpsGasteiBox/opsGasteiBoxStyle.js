import COLORS from 'constants/colors'
const BORDER = {
	color: COLORS.grey,
	width: 2,
	style: 'solid',
}

export default {
	ogBox: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
	},

	boxContainer: {
		paddingTop: 0,
		marginTop: 10,
	},

	boxBodyContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end',
		alignSelf: 'stretch',
		borderTopWidth: 0,
	},

	boxBody: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		borderColor: BORDER.color,
		borderWidth: BORDER.width,
		borderStyle: BORDER.style,
		borderTopWidth: 0,
		paddingHorizontal: 20,
		minHeight: 200,
	},

	boxHeader: {
		alignSelf: 'stretch',
		padding: 8,
		borderColor: BORDER.color,
		borderWidth: BORDER.width,
		borderStyle: BORDER.style,
	},

	textStyle: {
		fontWeight: 'bold',
		fontSize: 22,
		color: COLORS.grey,
		textAlign: 'center',
	},
}
