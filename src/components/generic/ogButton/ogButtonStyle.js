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
    borderTopWidth: 0,
    backgroundColor: COLORS.primaryColor,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: COLORS.primaryColor,
    padding: 8,
    shadowColor: 'rgba(0, 0, 0, 0.45)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 14,
  },

  texto: {
    color: COLORS.textColor,
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: '700',
  },
}
