import COLORS from 'constants/colors'

export default {
	buttonContainer: {
		flexDirection: 'row',
		flex: 1,
		padding: 10,
	},

	botao: {
		flex: 1,
		elevation: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: COLORS.text,
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: COLORS.primary,
		paddingHorizontal: 10,
		paddingVertical: 20,
		shadowColor: 'rgba(0, 0, 0, 0.45)',
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 14,
	},

	texto: {
		color: COLORS.primary,
		fontSize: 15,
		fontFamily: 'Arial',
		fontWeight: '700',
	},
}
